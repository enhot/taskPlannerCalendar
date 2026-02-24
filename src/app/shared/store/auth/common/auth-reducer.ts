import { createFeature, createReducer, on } from '@ngrx/store';
import { IAuthState } from './auth-state.interface';
import { AuthAction } from './auth-actions';


const authFeatureKey = 'authFeature';

const initialState:IAuthState  = {
	logIn:null,
	signUp:null,
	isAuth:false,
	error:''
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
	})),
		on(AuthAction.logIn.error, (state) => ({
		...state,
		isAuth:false,
		error:'Login error'
	})),
		on(AuthAction.signUp.requested, (state,{usersInfo}) => ({
		...state,
		signUp: usersInfo,
		isAuth:true
	})),
		on(AuthAction.signUp.error, (state) => ({
		...state,
		isAuth:false,
		error:'SignUp error'
	}))

)

export const authFeature = createFeature({
	name: authFeatureKey,
	reducer: authReducer,
});