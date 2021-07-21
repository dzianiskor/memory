import { combineReducers } from "redux";
import cards, { ICards } from "./reducers/cards";
import settings, { ISettings } from "./reducers/settings";
import board, { IBoard } from "./reducers/board";

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
