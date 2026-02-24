import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUserLogin, IUserRegistr } from '../../../interfaces/IUsersApi';
import { AuthAction } from '../../../store/auth/common/auth-actions';
import { authFeature } from '../../../store/auth/common/auth-reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  private store = inject(Store);
  public isAuth = this.store.select(authFeature.selectIsAuth); 

  public logIn(userInfo:IUserLogin){
      this.store.dispatch(AuthAction.logIn.requested({usersInfo: userInfo}))
  }

  public signUp(userInfo : IUserRegistr){
    this.store.dispatch(AuthAction.signUp.requested({usersInfo: userInfo}))
  }

}
