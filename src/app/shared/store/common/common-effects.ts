import { inject } from '@angular/core';
import { Actions, createEffect,  } from '@ngrx/effects';



export namespace CommonEffects {
        export const loadCount$ = createEffect(
        (action$ = inject(Actions)) => {
            return action$
        },{functional:true}
    );
}

