import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../../shared-models/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  @Input() recipe;

  ngOnInit(): void {
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
