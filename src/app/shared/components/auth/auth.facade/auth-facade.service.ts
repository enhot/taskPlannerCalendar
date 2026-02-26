import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser, IUserLogin, IUserRegistr } from '../../../interfaces/IUsersApi';
import { AuthAction } from '../../../store/auth/common/auth-actions';
import { authFeature } from '../../../store/auth/common/auth-reducer';
import { Form, FormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  private store = inject(Store);
  private actions$ = inject(Actions);

  public isAuth = this.store.select(authFeature.selectIsAuth); 
  
  public authSuccess$ = this.actions$.pipe(
    ofType(AuthAction.logIn.succeeded, AuthAction.signUp.succeeded)
  );

  public logIn(userInfo:IUserLogin){
      this.store.dispatch(AuthAction.logIn.requested({usersInfo: userInfo}))
  }

  public signUp(userInfo : IUserRegistr){
    this.store.dispatch(AuthAction.signUp.requested({usersInfo: userInfo}))
  }



}
