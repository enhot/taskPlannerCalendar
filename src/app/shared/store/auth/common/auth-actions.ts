import { createAction, props } from "@ngrx/store";
import { StoreHelper } from "../../helper.store/helper.store";
import { IUserLogin } from "../../../interfaces/IUsersApi";


const desc = StoreHelper.getActionDescription('Common');

export namespace AuthAction{

    export const logIn = {
        requested: createAction(desc('Log in req'),props<{usersInfo:IUserLogin}>()),
        succeeded : createAction(desc('Log in done'), props<{usersInfo:IUserLogin}>()),
        error:createAction(desc('Log in error'))
    }
    

}