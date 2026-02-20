import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CommonAction } from "./common-action";
import { catchError, EMPTY, filter, ignoreElements, map, startWith, switchMap, withLatestFrom,  } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { commonFeature } from "./common-reducer";
import { Store } from "@ngrx/store";
export namespace CommonEffects {

export const appInit = createEffect((action$ = inject(Actions), store = inject(Store)) => {
        return action$.pipe(
            ofType(CommonAction.appStart.requested, CommonAction.changeLanguage),
            withLatestFrom(store.select(commonFeature.selectChangeLanguage)),
            filter(([,langIsChanged]) => langIsChanged),
            map(() => {
                return CommonAction.appStart.succeeded()
            })
        );
    }, { functional: true });

export const appLanguageInit = createEffect((action$ = inject(Actions), translate = inject(TranslateService)) => {
    return action$.pipe(
        ofType(CommonAction.changeLanguage),
        switchMap(({lang}) =>{
            return   translate.use(lang).pipe(
            ignoreElements(), 
            catchError(err => {
                console.error('Language Load Failed', err);
                return EMPTY;
            })
        )
          })
    );
    }, { functional: true , dispatch:false});

}

