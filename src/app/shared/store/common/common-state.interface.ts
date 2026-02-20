import { Elanguage } from "../../../../assets/i18n/translations.enums";

export interface ICommonState {
	initialized: boolean;
	language: Elanguage | null;
	changeLanguage:boolean;
}