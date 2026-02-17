import { createAction, props } from "@ngrx/store";
import { StoreHelper } from "../helper.store/helper.store";
import { Elanguage } from "../../../../assets/i18n/translations.enums";

const desc = StoreHelper.getActionDescription('Common')
export namespace CommonAction{
    export const appStart = {
		requested: createAction(desc('App Start')),
		succeeded : createAction(desc('App Done')),
	};
    export const changeLanguage = createAction(desc('Set Suc language'), props<{lang:Elanguage}>());
    

}