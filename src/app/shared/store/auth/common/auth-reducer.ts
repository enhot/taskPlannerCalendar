import { createFeature, createReducer, on } from '@ngrx/store';
import { IAuthState } from './auth-state.interface';
import { AuthAction } from './auth-actions';


const authFeatureKey = 'authFeature';

const initialState:IAuthState  = {
	logIn:null,
	sighnUp:null,
	isAuth:false
};

const authReducer = createReducer(
	initialState,
	on(AuthAction.logIn.requested, (state) => ({
		...state,
		isAuth:false
	})),
		on(AuthAction.logIn.succeeded, (state) => ({
		...state,
		isAuth:true
	}))

)

export const authFeature = createFeature({
	name: authFeatureKey,
	reducer: authReducer,
});