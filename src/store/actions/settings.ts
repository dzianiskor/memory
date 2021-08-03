import { SettingsActionTypes } from "../actionTypes/settings";
import {IMainProperties} from "../interfaces/settings";
import { IDifficult } from "../../utils/containers/difficult/difficult";

export function showSettings() {
  return {
    type: SettingsActionTypes.SHOW_SETTINGS,
  };
}

export function hideSettings() {
  return {
    type: SettingsActionTypes.HIDE_SETTINGS,
  };
}

export function setMusicValue(value: number) {
  return {
    type: SettingsActionTypes.SET_MUSIC,
    payload: value,
  };
}

export function setSoundValue(value: number) {
  return {
    type: SettingsActionTypes.SET_SOUND,
    payload: value,
  };
}

export function setArena(arena: IMainProperties) {
  return {
    type: SettingsActionTypes.SET_ARENA,
    payload: arena,
  };
}

export function setBoard(board: IMainProperties) {
  return {
    type: SettingsActionTypes.SET_BOARD,
    payload: board,
  };
}

export function setWrapperCard(wrapperCard: IMainProperties) {
  return {
    type: SettingsActionTypes.SET_WRAPPER_CARD,
    payload: wrapperCard,
  };
}

export function setDifficult(difficult: IDifficult) {
  return {
    type: SettingsActionTypes.SET_DIFFICULT,
    payload: difficult,
  };
}
