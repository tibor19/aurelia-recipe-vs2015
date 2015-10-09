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

    edit(){
        this.recipeName = this.recipe.name;
        this.isEditMode = true;
    }

    cancel(){
        this.isEditMode = false;
    }
    save(){
        let orginalvalue = this.recipe.name;
        this.recipe.name = this.recipeName;
        this.recipeService.saveRecipe(this.recipe).then(()=>{
            this.isEditMode = false;
        })
        .catch(()=>{
            this.recipe.name = orginalvalue;
        });
    }
}