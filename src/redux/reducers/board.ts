import { BoardActionTypes } from "../actionTypes/board";
import { IInitialState } from "../rootReducer";

interface IPayload {
  status?: boolean;
}

interface IAction {
  type: BoardActionTypes;
  payload?: IPayload;
}

export interface IBoard {
  guardBoardAllowed: boolean;
  score: number;
  timer: number;
}

const initialState: IBoard = {
  guardBoardAllowed: true,
  score: 0,
  timer: 0,
};

const board = (state: IBoard = initialState, action: IAction) => {
  switch (action.type) {
    case BoardActionTypes.SET_GUARD_BOARD_ALLOWED:
      return {
        ...state,
        guardBoardAllowed: action.payload!.status,
      };
    case BoardActionTypes.INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case BoardActionTypes.INCREMENT_TIMER:
      return {
        ...state,
        timer: state.timer + 1,
      };
    case BoardActionTypes.RESTART_GAME:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getGuardBoardAllowed: any = (state: IInitialState) =>
  state.board.guardBoardAllowed;
export const getScore = (state: IInitialState) => state.board.score;
export const getTime = (state: IInitialState) => state.board.timer;

export default board;
