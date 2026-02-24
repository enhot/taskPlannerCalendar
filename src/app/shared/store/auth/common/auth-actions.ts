import { createAction, props } from "@ngrx/store";
import { StoreHelper } from "../../helper.store/helper.store";
import { IUser, IUserLogin, IUserRegistr } from "../../../interfaces/IUsersApi";


const desc = StoreHelper.getActionDescription('Common');

export namespace AuthAction{

    export const logIn = {
        requested: createAction(desc('Log in req'),props<{usersInfo:IUserLogin}>()),
        succeeded : createAction(desc('Log in done'), props<{usersInfo:IUser}>()),
        error:createAction(desc('Log in error'))
    }
    export const signUp = {
        requested: createAction(desc('Sign up req'), props<{usersInfo:IUserRegistr}>()),
        succeeded : createAction(desc('Sign up done')),
        error:createAction(desc('Sign up error'))
    }
    

}