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
import * as fromApp from './store/app.reducer'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment.development';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RecipeEffects } from './recipes/store/recipe.effects';



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
      StoreModule.forRoot(fromApp.appReducer),
      EffectsModule.forRoot([AuthEffects, RecipeEffects]),
      StoreDevtoolsModule.instrument({ logOnly: environment.production }),
      StoreRouterConnectingModule.forRoot()
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
