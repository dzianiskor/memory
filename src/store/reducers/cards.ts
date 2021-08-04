import { CardsActionTypes } from "../actionTypes/cards";
import { IInitialState } from "../rootReducer";
import { IAction, ICard, ICards, ICompareCards } from "../interfaces/cards";
import { getSavedData, SaveNames } from "../../utils/saveGame/saveGame";
import { getStartDeck } from "../../utils/containers/deck/deck";

const initialState: ICards = {
  cards: (getSavedData(SaveNames.CARD) as ICard[]) ?? getStartDeck(),
  compareCard: null,
};

const cards = (state: ICards = initialState, action: IAction) => {
  switch (action.type) {
    case CardsActionTypes.SET_CARDS_DECK:
      return {
        ...state,
        cards: action.payload,
      };
    case CardsActionTypes.CLICK_ON_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload ? { ...card, status: "clicked" } : card
        ),
      };
    case CardsActionTypes.SET_STATUS_TWO_CARDS:
      return {
        ...state,
        cards: state.cards.map((card) => {
          const payload = action.payload as ICompareCards;
          return payload.ids.indexOf(card.id) !== -1
            ? { ...card, status: payload.status }
            : card;
        }),
      };
    case CardsActionTypes.ADD_COMPARE_CARD:
      return {
        ...state,
        compareCard: state.cards.find(
          (card: ICard) => card.id === action.payload
        ),
      };
    case CardsActionTypes.CLEAR_COMPARE_CARD:
      return {
        ...state,
        compareCard: null,
      };
    case CardsActionTypes.CLOSE_CARDS:
      return {
        ...state,
        cards: state.cards.map((card) => {
          return { ...card, status: "failCard" };
        }),
      };
    case CardsActionTypes.RESTART_GAME:
      return {
        ...state,
        cards: getStartDeck(),
        compareCard: null,
      };
    default:
      return state;
  }
};

export const getCards = (state: IInitialState) => state.cards.cards;
export const getCompareCard = (state: IInitialState) => state.cards.compareCard;

export default cards;
