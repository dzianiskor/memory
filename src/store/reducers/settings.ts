import { SettingsActionTypes } from "../actionTypes/settings";
import { IInitialState } from "../rootReducer";
import { getStartArena } from "../../utils/containers/arena/arena";
import { getStartBoard } from "../../utils/containers/board/board";
import { getStartWrapperCard } from "../../utils/containers/wrapperCard/wrapperCard";
import {getStartDifficult} from "../../utils/containers/difficult/difficult";
import {IAction, ISettings} from "../interfaces/settings";

const initialState: ISettings = {
  arena: getStartArena(),
  board: getStartBoard(),
  wrapperCard: getStartWrapperCard(),
  difficult: getStartDifficult(),
  musicValue: 0.3,
  soundValue: 0.5,
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
