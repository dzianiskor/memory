import { BoardActionTypes } from "../actionTypes/board";

export function setGuardBoardAllowed(status: boolean) {
  return {
    type: BoardActionTypes.SET_GUARD_BOARD_ALLOWED,
    payload: { status },
  };
}

export function incrementScore() {
  return {
    type: BoardActionTypes.INCREMENT_SCORE,
  };
}

export function incrementTimer() {
  return {
    type: BoardActionTypes.INCREMENT_TIMER,
  };
}
