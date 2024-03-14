import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs/operators";
import { tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducer'
import * as RecipesActions from "../recipes/store/recipe.actions";


@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient,
        private recipesService: RecipeService,
        private store: Store<fromApp.AppState>) { }

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put(
            'https://recipebook-a429e-default-rtdb.europe-west1.firebasedatabase.app/:recipes.json', recipes
        ).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {

        return this.http.get<Recipe[]>('https://recipebook-a429e-default-rtdb.europe-west1.firebasedatabase.app/:recipes.json')
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                    });
                }), tap(recipes => {
                    //this.recipesService.setRecipes(recipes);
                    this.store.dispatch(new RecipesActions.SetRecipes(recipes));
                }))

    }

}