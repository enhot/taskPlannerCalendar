import { createFeature, createReducer, on } from '@ngrx/store';
import { ICommonState } from './common-state.interface';
import { CommonAction } from './common-action';

const commonFeatureKey = 'commonFeature';

const initialState: ICommonState = {
	initialized: false,
	language: null,
};

const commonReducer = createReducer(
	initialState,
    on(CommonAction.appStart.succeeded, (state) => ({
        ...state,
        initialized:true
    })),
    on(CommonAction.changeLanguage, (state, {lang})=> ({
        ...state,
        language : lang
    }))

)

export const commonFeature = createFeature({
	name: commonFeatureKey,
	reducer: commonReducer,
});