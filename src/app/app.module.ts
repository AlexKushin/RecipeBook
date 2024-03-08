import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './components/auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './components/shopping-list/store/shopping-list.reducer';



@NgModule({
  declarations:
    [
      AppComponent,
      HeaderComponent,
    ],
  imports:
    [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      SharedModule,
      CoreModule,
      AuthModule,
      StoreModule.forRoot({shoppingList: shoppingListReducer})
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
