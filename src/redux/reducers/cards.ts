import { CardsActionTypes } from "../actionTypes/cards";
import { IInitialState } from "../rootReducer";

interface IPayload {
  id?: number | string;
  id1?: number | string;
  id2?: number | string;
  status?: string;
}

interface IAction {
  type: CardsActionTypes;
  payload?: IPayload;
}

export interface ICard {
  id: number | string;
  cardId: number | string;
  status: string;
  path: string;
}

export interface ICards {
  cards: ICard[];
  compareCard: any;
}

const initialState: ICards = {
  cards: [
    { id: 1, cardId: 1, status: "", path: "/img/heroes/1.png" },
    { id: 2, cardId: 1, status: "", path: "/img/heroes/1.png" },
    { id: 3, cardId: 2, status: "", path: "/img/heroes/2.png" },
    { id: 4, cardId: 2, status: "", path: "/img/heroes/2.png" },
    { id: 5, cardId: 3, status: "", path: "/img/heroes/3.png" },
    { id: 6, cardId: 3, status: "", path: "/img/heroes/3.png" },
    { id: 7, cardId: 4, status: "", path: "/img/heroes/4.png" },
    { id: 8, cardId: 4, status: "", path: "/img/heroes/4.png" },
    { id: 9, cardId: 5, status: "", path: "/img/heroes/5.png" },
    { id: 10, cardId: 5, status: "", path: "/img/heroes/5.png" },
    { id: 11, cardId: 6, status: "", path: "/img/heroes/6.png" },
    { id: 12, cardId: 6, status: "", path: "/img/heroes/6.png" },
    { id: 13, cardId: 7, status: "", path: "/img/heroes/7.png" },
    { id: 14, cardId: 7, status: "", path: "/img/heroes/7.png" },
    { id: 15, cardId: 8, status: "", path: "/img/heroes/8.png" },
    { id: 16, cardId: 8, status: "", path: "/img/heroes/8.png" },
    { id: 17, cardId: 9, status: "", path: "/img/heroes/9.png" },
    { id: 18, cardId: 9, status: "", path: "/img/heroes/9.png" },
    { id: 19, cardId: 10, status: "", path: "/img/heroes/10.png" },
    { id: 20, cardId: 10, status: "", path: "/img/heroes/10.png" },
  ],
  compareCard: null,
};

const cards = (state: ICards = initialState, action: IAction) => {
  switch (action.type) {
    case CardsActionTypes.CLICK_ON_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload!.id ? { ...card, status: "clicked" } : card
        ),
      };
    case CardsActionTypes.SET_STATUS_TWO_CARDS:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload!.id1 || card.id === action.payload!.id2
            ? { ...card, status: action.payload!.status }
            : card
        ),
      };
    case CardsActionTypes.ADD_COMPARE_CARD:
      return {
        ...state,
        compareCard: state.cards.find(
          (card: ICard) => card.id === action.payload!.id
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
        ...initialState,
      };
    default:
      return state;
  }
};

export const getCards = (state: IInitialState) => state.cards.cards;
export const getCompareCard = (state: IInitialState) => state.cards.compareCard;

export default cards;
