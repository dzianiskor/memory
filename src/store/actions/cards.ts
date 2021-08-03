import { CardsActionTypes } from "../actionTypes/cards";
import { ICard } from "../interfaces/cards";

export function setCardsDeck(cards: ICard[]) {
  return {
    type: CardsActionTypes.SET_CARDS_DECK,
    payload: cards,
  };
}

export function clickOnCard(card: ICard) {
  return {
    type: CardsActionTypes.CLICK_ON_CARD,
    payload: card.id,
  };
}

export function setStatusTwoCards(ids: (number | string)[], status: string) {
  return {
    type: CardsActionTypes.SET_STATUS_TWO_CARDS,
    payload: { ids, status },
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
    payload: id,
  };
}

export function restartCards() {
  return {
    type: CardsActionTypes.RESTART_GAME,
  };
}

export function closeCards() {
  return {
    type: CardsActionTypes.CLOSE_CARDS,
  };
}
