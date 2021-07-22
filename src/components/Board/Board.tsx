import React, { useEffect, useRef, useState } from "react";
import GuardBoard from "./GuardBoard/GuardBoard";
import Result from "./Result/Result";
import Card from "./Card/Card";
import s from "./Board.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCards, getCompareCard, ICard } from "../../redux/reducers/cards";
import { getScore } from "../../redux/reducers/board";
import {
  incrementScore,
  incrementTimer,
  restartBoard,
  setGuardBoardAllowed,
} from "../../redux/actions/board";
import {
  addCompareCard,
  clearCompareCard,
  clickOnCard,
  closeCards,
  restartCards,
  setStatusTwoCards,
} from "../../redux/actions/cards";

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const cards: ICard[] = useSelector(getCards);
  const compareCard: ICard = useSelector(getCompareCard);
  const score = useSelector(getScore);

  const [showResult, setShowResult] = useState<boolean>(false);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    if (!showResult) {
      timer.current = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);

      return () => clearInterval(timer.current as NodeJS.Timeout);
    }
  }, [dispatch, showResult]);

  useEffect(() => {
    checkFinishGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  const checkFinishGame = () => {
    const countSuccessCards = cards.filter(
      (card) => card.status === "successCard"
    ).length;
    if (countSuccessCards === /*cards.length*/ 2) {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    dispatch(closeCards());
    setTimeout(() => {
      dispatch(restartBoard());
      dispatch(restartCards());
      setShowResult(false);
    }, 1000);
  };

  const changeStatus = (id: string | number, cardId: number | string) => {
    dispatch(setGuardBoardAllowed(false));
    dispatch(clickOnCard(id));
    if (compareCard && compareCard.id !== id) {
      if (compareCard.cardId === cardId) {
        setTimeout(() => {
          dispatch(setStatusTwoCards(id, compareCard.id, "successCard"));
          dispatch(incrementScore());
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
    setTimeout(() => {
      dispatch(setGuardBoardAllowed(true));
    }, 1000);
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
        {showResult && (
          <Result timerIntervalId={timer.current} restartGame={restartGame} />
        )}
      </div>
    </div>
  );
};

export default Board;
