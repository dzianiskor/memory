import {SettingsActionTypes} from "../actionTypes/settings";
import {IDifficult} from "../../utils/containers/difficult/difficult";

export interface IMainProperties {
    id: number | string;
    name: string;
    path: string;
    active: boolean;
}

type ActionType = IMainProperties | IDifficult | number;

export interface IAction {
    type: SettingsActionTypes;
    payload: ActionType;
}

export interface ISettings {
    arena: IMainProperties;
    board: IMainProperties;
    wrapperCard: IMainProperties;
    difficult: IDifficult;
    musicValue: number;
    soundValue: number;
    isShowSettings: boolean;
}
