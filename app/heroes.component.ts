import {Component, OnInit} from 'angular2/core'        //import statenent to reference things we need
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({                                            //@Component decorator tells Angular what template to use & how to create it
    selector: 'my-heroes',                                 //@Component is a decorator function that takes a metadata object which tells
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})

//<input value="{{hero.name}}" placeholder="name" />

export class HeroesComponent implements OnInit{                  // component class that controls the appearance & behaviour of a view
    public heroes: Hero[];
    public selectedHero: Hero;
    
    constructor(
        private _router: Router,
        private _heroService: HeroService
    ){}
    
    ngOnInit(){
        this.getHeroes();
    }
    
    private getHeroes() {
        //this.heroes = this._heroService.getHeroes();
        this._heroService.getHeroes()
            .then((heroesResult) => {
                this.heroes = heroesResult;
            }, (e) => {
                console.log('something went wrong when fetching heroes');
            });
    }
    
    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    
    gotoDetail(){
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}

//AppComponent is the root of the application
//every ANgular 2 app has at least oone root component, conventionally named AppComponent