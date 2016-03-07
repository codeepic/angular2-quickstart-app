import {Component} from 'angular2/core'        //import statenent to reference things we need

interface Hero {
    id: number;
    name: string;
}

@Component({                                            //@Component decorator tells Angular what template to use & how to create it
    selector: 'my-app',                                 //@Component is a decorator function that takes a metadata object which tells
    template: `
        <h1>{{title}}</h1>
        
        <div *ngIf="selectedHero">
            <h2>{{selectedHero.name}} details!</h2>
            <div><label>id: </label>{{selectedHero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name"/>
            </div>
        </div>
        
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
        `]
})

//<input value="{{hero.name}}" placeholder="name" />

export class AppComponent{                  // component class that controls the appearance & behaviour of a view
    public title = 'Tour of Heroes';
    public heroes = HEROES;
    public selectedHero: Hero;
    
    public onSelect(hero: Hero): void {
        console.log('selected: ', hero);
        this.selectedHero = hero;
    }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

//AppComponent is the root of the application
//every ANgular 2 app has at least oone root component, conventionally named AppComponent