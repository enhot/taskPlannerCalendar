import { IUserLogin, IUserRegistr } from "../../../interfaces/IUsersApi";

export interface IAuthState {
	signUp:IUserRegistr | null;
	logIn:IUserLogin | null;
	isAuth:boolean;
	error:string
}