import { IUserLogin, IUserRegistr } from "../../../interfaces/IUsersApi";

export interface IAuthState {
	sighnUp:IUserRegistr | null;
	logIn:IUserLogin | null;
	isAuth:boolean;
}