import { SettingsActionTypes } from "../actionTypes/settings";

interface IAction {
  type: SettingsActionTypes;
  payload: string[] | number[] | IMainProperties;
}

export interface IMainProperties {
  id: number | string;
  name: string;
  path: string;
}

interface ISettings {
  arena: IMainProperties;
  table: IMainProperties;
  wrapperCard: IMainProperties;
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

export default settings;
