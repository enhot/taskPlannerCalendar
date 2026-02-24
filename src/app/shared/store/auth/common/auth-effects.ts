import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthAction } from "./auth-actions";
import { AuthService } from "../../../services/auth.service";
import { catchError, map, of, switchMap } from "rxjs";
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
                            uid: user.uid,
                            name:user.displayName! as string,
                            createdAt: Number(user.metadata.creationTime) || Date.now(),
                        }})
                    }),
                        catchError((err) => {
                            console.error('Login Error', err);
                            return of(AuthAction.logIn.error());
                        })
                    
                )
            })
        )
    }, { functional: true });

export const signUp = createEffect((action$ = inject(Actions), authService = inject(AuthService)) => {
    return action$.pipe(
        ofType(AuthAction.signUp.requested),
        switchMap(({usersInfo}) => {
            return authService.signUp(usersInfo).pipe(
                map(() => {
                    return AuthAction.signUp.succeeded()
                }),
                catchError((error) => {
            console.error('Sign Up Error:', error);
            return of(AuthAction.signUp.error());
          })

            )
        })
    )

},{functional:true})
    
    


}

