import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit{
 
  constructor(){}
 
  @Input() recipe: Recipe;

  @Output() selectedRecipe = new EventEmitter<void>();
 
  ngOnInit(): void {
   
  }

  onSelect(){
    this.selectedRecipe.emit();
  }

}
