import {inject} from 'aurelia-framework';
import {join} from 'aurelia-path';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class RecipeService{
    
    url = 'http://recipewebapi.azurewebsites.net/api/recipes';
    // url = '/api/recipes';

    constructor(http){
        this.http = http;
    }

    getRecipe (id){

        let url = join(this.url, id || '1');

        return this.http.get(url)
                .then(result => {
                        return result.content;
                }).catch(error => console.log(error));
    }

    getRecipies (){
        return this.http.get(this.url)
                .then(result => {
                    return result.content;
                }).catch(error => console.log(error));
    }

    saveRecipe(recipe){
        let url = join(this.url, '' + recipe.recipeID);

        return this.http.put(url, recipe);

    }
}