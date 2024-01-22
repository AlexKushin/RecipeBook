import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  collapsed = true;

  @Output() showComponent = new EventEmitter<string>();

  ngOnInit(): void {

  }

  // onChooseComponent() {
  //   this.showComponent.emit(
  //     {
  //       recipeIsVisible: this.showRecipe,
  //       shoppingListIsVisible: this.showShoppingList
  //     });
  // }




  onSelect(feature: string) {
    this.showComponent.emit(feature);
  }
}
