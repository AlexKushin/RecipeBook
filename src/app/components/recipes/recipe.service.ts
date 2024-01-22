
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared-models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty burger', 'Simply test1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-7mlnueJTObKVPDGiMlvE1XDK-WSiwB1iZrBTOTCDqJp6o0XVxtCzA585sqLx9x7Ies&usqp=CAU',
      [
        new Ingredient('Meet', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe('The most Tasty burger', 'Simply test2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-7mlnueJTObKVPDGiMlvE1XDK-WSiwB1iZrBTOTCDqJp6o0XVxtCzA585sqLx9x7Ies&usqp=CAU',
      [
        new Ingredient('Meet', 3),
        new Ingredient('French fries', 30)
      ])
  ]

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
