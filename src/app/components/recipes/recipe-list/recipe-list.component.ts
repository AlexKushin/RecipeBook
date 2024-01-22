import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
    new Recipe('A Test recipe1', 'Simply test1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-7mlnueJTObKVPDGiMlvE1XDK-WSiwB1iZrBTOTCDqJp6o0XVxtCzA585sqLx9x7Ies&usqp=CAU'),
    new Recipe('A Test recipe2', 'Simply test2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-7mlnueJTObKVPDGiMlvE1XDK-WSiwB1iZrBTOTCDqJp6o0XVxtCzA585sqLx9x7Ies&usqp=CAU')
  ]

  constructor() { }

  ngOnInit(): void {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
