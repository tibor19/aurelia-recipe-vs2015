import {inject} from 'aurelia-framework';
import {RecipeService} from 'services/recipe-service';

@inject(RecipeService)
export class Recipe {
    
    recipe = null;

    constructor(recipeService){
        this.recipeService = recipeService;
    }

    activate(params){
        let id = params.id || '1';
        return this.recipeService.getRecipe(id).then(r => (this.recipe = r));
    }
}