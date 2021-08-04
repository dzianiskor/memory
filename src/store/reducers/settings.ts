import { SettingsActionTypes } from "../actionTypes/settings";
import { IInitialState } from "../rootReducer";
import { getStartArena } from "../../utils/containers/arena/arena";
import { getStartWrapperCard } from "../../utils/containers/wrapperCard/wrapperCard";
import { IAction, IMainProperties, ISettings } from "../interfaces/settings";
import { getSavedData, SaveNames } from "../../utils/saveGame/saveGame";
import { getStartBoard } from "../../utils/containers/board/board";
import {
  getStartDifficult,
  IDifficult,
} from "../../utils/containers/difficult/difficult";

const initialState: ISettings = {
  arena: (getSavedData(SaveNames.ARENA) as IMainProperties) ?? getStartArena(),
  board: (getSavedData(SaveNames.BOARD) as IMainProperties) ?? getStartBoard(),
  wrapperCard:
    (getSavedData(SaveNames.WRAPPER_CARD) as IMainProperties) ??
    getStartWrapperCard(),
  difficult:
    (getSavedData(SaveNames.DIFFICULT) as IDifficult) ?? getStartDifficult(),
  musicValue: (getSavedData(SaveNames.MUSIC) as number) ?? 0.3,
  soundValue: (getSavedData(SaveNames.SOUND) as number) ?? 0.5,
  isShowSettings: false,
};

const settings = (state: ISettings = initialState, action: IAction) => {
  switch (action.type) {
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
    case SettingsActionTypes.SET_ARENA:
      return {
        ...state,
        arena: action.payload,
      };
    case SettingsActionTypes.SET_BOARD:
      return {
        ...state,
        board: action.payload,
      };
    case SettingsActionTypes.SET_WRAPPER_CARD:
      return {
        ...state,
        wrapperCard: action.payload,
      };
    case SettingsActionTypes.SET_DIFFICULT:
      return {
        ...state,
        difficult: action.payload,
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
export const getBoard = (state: IInitialState) => state.settings.board;
export const getWrapperCard = (state: IInitialState) =>
  state.settings.wrapperCard;
export const getDifficult = (state: IInitialState) => state.settings.difficult;

export default settings;
