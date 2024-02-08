import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipesEditComponent } from './components/recipes/recipes-edit/recipes-edit.component';
import { RecipeService } from './components/recipes/recipe.service';
import { AuthComponent } from './components/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipesEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ShoppingListService, 
    RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
