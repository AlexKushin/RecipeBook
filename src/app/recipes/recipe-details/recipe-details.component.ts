import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer'
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import * as RecipesActions from '../store/recipe.actions'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  recipe: Recipe;
  id: number;


  ngOnInit(): void {


    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //     //this.recipe = this.recipeService.getRecipe(this.id);
    //     this.store.select('recipes')
    //       .pipe(map(recipesState => {
    //         return recipesState.recipes.find((recipe, index) => {
    //           return index === this.id;
    //         })
    //       })
    //       )
    //       .subscribe(recipe => {
    //         this.recipe = recipe
    //       })
    //   }
    // );

    this.route.params.pipe(map(params => {
      return +params['id'];
    }),
      switchMap(id => {
        this.id = id;
        return this.store.select('recipes')
      }),
      map(recipesState => {
        return recipesState.recipes.find((recipe, index) => {
          return index === this.id;
        });
      })
    )
      .subscribe(recipe => {
        this.recipe = recipe;
      })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteRecipe() {
    //this.recipeService.deleteRecipe(this.id)
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id))
    this.router.navigate(['/recipes'])
  }

}
