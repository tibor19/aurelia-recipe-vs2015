import {inject} from 'aurelia-framework';
import {RecipeService} from 'services/recipe-service';

@inject(RecipeService)
export class WeeklyMenu {

    constructor(recipeService){
        this.recipeService = recipeService;
        this.recipes = null;
    }

    activate(){
        let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        return this.recipeService.getRecipies()
            .then(recipies => 
                this.recipes = recipies.slice(0,weekdays.length).map((recipe, index) => {
                    recipe.weekday = weekdays[index % weekdays.length];
                    return recipe;
                }));
    }
}
