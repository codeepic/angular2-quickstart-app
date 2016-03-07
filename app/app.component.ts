import {Component} from 'angular2/core'        //import statenent to reference things we need
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({                                            //@Component decorator tells Angular what template to use & how to create it
    selector: 'my-app',                                 //@Component is a decorator function that takes a metadata object which tells
    template: `
        <h1>{{title}}</h1>
        
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
                
        <h2>Heroes</h2>
        <ul class='heroes'>
            <li *ngFor="#hero of heroes" (click) = "onSelect(hero)" [class.selected]="hero===selectedHero">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        `,
    styles:[`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
            border: 1px solid red;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 10em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
        `],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

//<input value="{{hero.name}}" placeholder="name" />

export class AppComponent{                  // component class that controls the appearance & behaviour of a view
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;
    
    constructor(private _heroService: HeroService){}
    
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
        console.log('selected: ', hero);
        this.selectedHero = hero;
    }
}

//AppComponent is the root of the application
//every ANgular 2 app has at least oone root component, conventionally named AppComponent