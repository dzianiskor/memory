import { combineReducers } from "redux";
import { IBoard } from "./interfaces/board";
import { ICards } from "./interfaces/cards";
import { ISettings } from "./interfaces/settings";
import board from "./reducers/board";
import cards from "./reducers/cards";
import settings from "./reducers/settings";

export interface IInitialState {
  board: IBoard;
  cards: ICards;
  settings: ISettings;
}

const rootReducer = () =>
  combineReducers({
    board,
    cards,
    settings,
  });

export default rootReducer;
