import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../components/recipes/recipe.service";
import { Recipe } from "../components/recipes/recipe.model";
import { exhaustMap, map, take } from "rxjs/operators";
import { tap } from "rxjs/operators";
import { AuthService } from "../components/auth/auth.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient,
        private recipesService: RecipeService,
        private authService: AuthService) { }

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
                    this.recipesService.setRecipes(recipes);

                }))

    }

}