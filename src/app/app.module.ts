import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
//import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
//import { authReducer } from './auth/store/auth.reducer';
import * as fromApp from './store/app.reducer'




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
      // StoreModule.forRoot(//here we tell to ngrx which reducers we have in our application
      //   {
      //     shoppingList: shoppingListReducer,
      //     auth: authReducer
      //   }
      // ) 
      StoreModule.forRoot(fromApp.appReducer)
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
