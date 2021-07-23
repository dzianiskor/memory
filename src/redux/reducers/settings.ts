import { SettingsActionTypes } from "../actionTypes/settings";
import { IInitialState } from "../rootReducer";

interface IAction {
  type: SettingsActionTypes;
  payload: string[] | number[] | IMainProperties;
}

export interface IMainProperties {
  id: number | string;
  name: string;
  path: string;
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
  arena: {
    id: 1,
    name: "Fight",
    path: "1.jpg",
  },
  table: {
    id: 1,
    name: "Type 1",
    path: "1.jpg",
  },
  wrapperCard: {
    id: 1,
    name: "Standard",
    path: "1.png",
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

export default settings;
