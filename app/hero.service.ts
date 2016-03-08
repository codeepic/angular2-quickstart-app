import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';

@Injectable()

export class HeroService{
    getHeroes(){
        return Promise.resolve(HEROES);        
    }
    
    //not working
    // getHero(id: number){
    //     return Promise.resolve(HEROES[id]);
    // }
    
    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
            
        );
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