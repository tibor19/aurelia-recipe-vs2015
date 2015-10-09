import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Recipe {
    
    recipe = null;

    constructor(http){
        this.http = http;
    }

    activate(){
        return this.http
            .get('/data/recipe.json')
            .then(result => {
                return this.recipe = result.content;
            })
            .catch(console.log);
    }
}