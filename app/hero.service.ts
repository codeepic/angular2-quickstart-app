import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';

@Injectable()

export class HeroService{
    getHeroes(){
        //return HEROES;
        return Promise.resolve(HEROES);        
    }
    
    getHeroesSlowly(){
        return new Promise<Hero[]>(resolve => 
            setTimeout(() => resolve(HEROES), 5000)
        );
    }
    getHeroesSuperSlowly(){
        return new Promise<Hero[]>((resolve) => {
            setTimeout(() => {
                return resolve(HEROES);
            }, 10000);
        })
    }
}