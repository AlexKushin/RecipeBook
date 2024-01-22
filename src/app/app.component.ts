import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor() { }
  title = 'RecipeBook';
  feature: string = 'recipe';

  ngOnInit(): void {

  }

  onShowComponent(feature: string) {
    this.feature = feature
  }

}
