import { SettingsActionTypes } from "../actionTypes/settings";
import { IInitialState } from "../rootReducer";
import { getStartArena } from "../../utils/containers/arena/arena";

interface IAction {
  type: SettingsActionTypes;
  payload: string[] | number[] | IMainProperties;
}

export interface IMainProperties {
  id: number | string;
  name: string;
  path: string;
  active: boolean;
}

export interface ISettings {
  arena: IMainProperties;
  table: IMainProperties;
  wrapperCard: IMainProperties;
  musicValue: number;
  soundValue: number;
  isShowSettings: boolean;
}

const initialState: ISettings = {
  arena: getStartArena(),
  table: {
    id: 1,
    name: "Type 1",
    path: "1.jpg",
    active: true,
  },
  wrapperCard: {
    id: 1,
    name: "Standard",
    path: "1.png",
    active: true,
  },
  musicValue: 0.3,
  soundValue: 0.5,
  isShowSettings: false,
};

const settings = (state: ISettings = initialState, action: IAction) => {
  switch (action.type) {
    case SettingsActionTypes.SET_ARENA:
      return {
        ...state,
        arena: action.payload,
      };
    case SettingsActionTypes.SHOW_SETTINGS:
      return {
        ...state,
        isShowSettings: true,
      };
    case SettingsActionTypes.HIDE_SETTINGS:
      return {
        ...state,
        isShowSettings: false,
      };
    case SettingsActionTypes.SET_MUSIC:
      return {
        ...state,
        musicValue: action.payload,
      };
    case SettingsActionTypes.SET_SOUND:
      return {
        ...state,
        soundValue: action.payload,
      };
    default:
      return state;
  }
};

export const getMusicValue = (state: IInitialState) =>
  state.settings.musicValue;
export const getSoundValue = (state: IInitialState) =>
  state.settings.soundValue;
export const getIsShowSettings = (state: IInitialState) =>
  state.settings.isShowSettings;
export const getArena = (state: IInitialState) => state.settings.arena;

export default settings;
