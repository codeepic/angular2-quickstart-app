import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent{
    hero: Hero;
    
    constructor(
        private _heroService:HeroService,
        private _routeParams: RouteParams
    ){}
    
    ngOnInit(){
        let id: number = +this._routeParams.get('id');
        //hero id is a number, route params are always strings.
        //with + we convert the string to a number
        
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
    
    goBack(){
        window.history.back();
    }
}