import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import GuardBoard from "./GuardBoard/GuardBoard";
import Result from "./Result/Result";
import Card from "./Card/Card";
import Settings from "./Settings/Settings";
import s from "./Board.module.scss";
import { getCards, getCompareCard, ICard } from "../../redux/reducers/cards";
import { getScore } from "../../redux/reducers/board";
import successSound from "../../sounds/success.mp3";
import failSound from "../../sounds/error.mp3";
import clickSound from "../../sounds/click.mp3";
import music from "../../sounds/music.mp3";
import soundMenu from "../../sounds/menu.mp3";
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
  setCardsDeck,
  setStatusTwoCards,
} from "../../redux/actions/cards";
import {
  getBoard,
  getDifficult,
  getIsShowSettings,
  getMusicValue,
  getSoundValue,
} from "../../redux/reducers/settings";
import { getStartDeck } from "../../utils/containers/deck/deck";

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const cards: ICard[] = useSelector(getCards);
  const compareCard: ICard = useSelector(getCompareCard);
  const score = useSelector(getScore);

  const musicValue = useSelector(getMusicValue);
  const soundValue = useSelector(getSoundValue);
  const board = useSelector(getBoard);

  const [playMusic, playMusicSoundDriver] = useSound(music, {
    volume: musicValue,
  });
  const [playSuccessSound, playSuccessSoundDriver] = useSound(successSound, {
    volume: soundValue,
  });
  const [playFailSound, playFailSoundDriver] = useSound(failSound, {
    volume: soundValue,
  });
  const [playClickSound, playClickSoundDriver] = useSound(clickSound, {
    volume: soundValue,
  });
  const [playSoundMenu, playSoundMenuDriver] = useSound(soundMenu, {
    volume: soundValue,
  });

  const [showResult, setShowResult] = useState<boolean>(false);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);
  const isShowSettings = useSelector(getIsShowSettings);
  const difficult = useSelector(getDifficult);

  useEffect(() => {
    if (timer.current) {
      const deck = getStartDeck(difficult);
      playClickSound();
      dispatch(restartBoard());
      dispatch(setCardsDeck(deck));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficult]);

  useEffect(() => {
    if (!showResult) {
      timer.current = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);
    }

    return () => {
      clearInterval(timer.current as NodeJS.Timeout);
    };
  }, [dispatch, showResult]);

  useEffect(() => {
    checkFinishGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  useEffect(() => {
    playMusic();
    return () => {
      playSuccessSoundDriver.stop();
      playFailSoundDriver.stop();
      playClickSoundDriver.stop();
      playMusicSoundDriver.stop();
      playSoundMenuDriver.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playMusic]);

  const checkFinishGame = () => {
    const countSuccessCards = cards.filter(
      (card) => card.status === "successCard"
    ).length;
    if (countSuccessCards === /*cards.length*/ 2) {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    playSoundMenu();
    dispatch(closeCards());
    playClickSound();
    setTimeout(() => {
      dispatch(restartBoard());
      playClickSound();
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
          playSuccessSound();
          dispatch(setStatusTwoCards(id, compareCard.id, "successCard"));
          dispatch(incrementScore());
        }, 1000);
      } else {
        setTimeout(() => {
          playFailSound();
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
          backgroundImage: `url("/img/tables/${board.path}")`,
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
        {isShowSettings && <Settings />}
      </div>
    </div>
  );
};

export default Board;
