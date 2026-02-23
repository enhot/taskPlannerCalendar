import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { Store } from "@ngrx/store";
import { AuthAction } from "./auth-actions";
import { AuthService } from "../../../services/auth.service";
import { map, switchMap } from "rxjs";
import { IUserLogin } from "../../../interfaces/IUsersApi";
export namespace AuthEffects {

export const logIn = createEffect((action$ = inject(Actions), authService = inject(AuthService)) => {
        return action$.pipe(
            ofType(AuthAction.logIn.requested),
            switchMap(({usersInfo}) => {
                return authService.getUserInfo(usersInfo).pipe(
                    map((userCredential) => {
                        const user = userCredential.user;
                        return AuthAction.logIn.succeeded({
                            usersInfo: {
                            email: user.email! as string,
                            password: user.uid,
                        }})
                    
                    })
                )
            })

        )
    }, { functional: true });



}

