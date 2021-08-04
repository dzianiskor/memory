import { BoardActionTypes } from "../actionTypes/board";

export interface IAction {
  type: BoardActionTypes;
  payload?: boolean | number;
}

export interface IBoard {
  guardBoardAllowed: boolean;
  score: number;
  timer: number;
}
