import React from "react";
import GuardBoard from "./GuardBoard/GuardBoard";
import Card from "./Card/Card";
import s from "./Board.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addCompareCard,
  clearCompareCard,
  clickOnCard,
  setStatusTwoCards,
} from "../../redux/actions/cards";
import { getCards, getCompareCard, ICard } from "../../redux/reducers/cards";

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const cards: ICard[] = useSelector(getCards);

  const compareCard: ICard = useSelector(getCompareCard);
  const changeStatus = (id: string | number, cardId: number | string) => {
    dispatch(clickOnCard(id));
    if (compareCard && compareCard.id !== id) {
      if (compareCard.cardId === cardId) {
        setTimeout(() => {
          dispatch(setStatusTwoCards(id, compareCard.id, "successCard"));
        }, 1000);
      } else {
        setTimeout(() => {
          dispatch(setStatusTwoCards(id, compareCard.id, "failCard"));
        }, 1000);
      }
      dispatch(clearCompareCard());
    } else {
      dispatch(addCompareCard(id));
    }
  };

  return (
    <div className={s.tableImageWrapper}>
      <div
        className={s.tableImage}
        style={{
          backgroundImage: `url("/img/tables/1.jpg")`,
        }}
      >
        <GuardBoard>
          {cards.map((card: ICard) => (
            <Card
              id={card.id}
              key={card.id}
              cardId={card.cardId}
              status={card.status}
              changeStatus={changeStatus}
            />
          ))}
        </GuardBoard>
      </div>
    </div>
  );
};

export default Board;
