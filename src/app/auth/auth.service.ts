import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer'
import * as AuthActions from './store/auth.actions'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenExpirationTimer: any;

  constructor(private store: Store<fromApp.AppState>) { }

  setLogOutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      console.log('here **********')
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration)
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}
