import { CardsActionTypes } from "../actionTypes/cards";

export function clickOnCard(id: number | string) {
  return {
    type: CardsActionTypes.CLICK_ON_CARD,
    payload: { id },
  };
}

export function setStatusTwoCards(
  id1: number | string,
  id2: number | string,
  status: string
) {
  return {
    type: CardsActionTypes.SET_STATUS_TWO_CARDS,
    payload: { id1, id2, status },
  };
}

export function clearCompareCard() {
  return {
    type: CardsActionTypes.CLEAR_COMPARE_CARD,
  };
}

export function addCompareCard(id: number | string) {
  return {
    type: CardsActionTypes.ADD_COMPARE_CARD,
    payload: { id },
  };
}
