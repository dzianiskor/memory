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
};

const settings = (state: ISettings = initialState, action: IAction) => {
  switch (action.type) {
    case SettingsActionTypes.SET_ARENA:
      return {
        ...state,
        arena: action.payload,
      };
    default:
      return state;
  }
};

export const getMusicValue = (state: IInitialState) =>
  state.settings.musicValue;
export const getSoundValue = (state: IInitialState) =>
  state.settings.soundValue;

export default settings;
