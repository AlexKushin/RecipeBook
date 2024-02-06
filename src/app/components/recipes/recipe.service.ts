import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared-models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  recipesChangeed = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('Tasty burger', 'Simply test1',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-7mlnueJTObKVPDGiMlvE1XDK-WSiwB1iZrBTOTCDqJp6o0XVxtCzA585sqLx9x7Ies&usqp=CAU',
  //     [
  //       new Ingredient('Meet', 1),
  //       new Ingredient('French fries', 20)
  //     ]),
  //   new Recipe('The most Tasty burger', 'Simply test2',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-7mlnueJTObKVPDGiMlvE1XDK-WSiwB1iZrBTOTCDqJp6o0XVxtCzA585sqLx9x7Ies&usqp=CAU',
  //     [
  //       new Ingredient('Meet', 3),
  //       new Ingredient('French fries', 30)
  //     ])
  // ]

  private recipes: Recipe[] = []

  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChangeed.next(this.recipes.slice()); //we have to emit data after every change, retrive etc
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChangeed.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChangeed.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChangeed.next(this.recipes.slice());
  }
}
