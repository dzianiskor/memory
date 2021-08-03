import {CardsActionTypes} from "../actionTypes/cards";

export interface ICompareCards {
    ids: (number | string)[];
    status: string;
}

type PayloadType = ICompareCards | string | number;

export interface IAction {
    readonly type: CardsActionTypes;
    readonly payload?: PayloadType;
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
