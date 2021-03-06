import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import GuardBoard from "./GuardBoard/GuardBoard";
import Result from "./Result/Result";
import Card from "./Card/Card";
import Settings from "./Settings/Settings";
import s from "./Board.module.scss";
import { getCards, getCompareCard } from "../../store/reducers/cards";
import { getScore, getTime } from "../../store/reducers/board";
import successSound from "../../sounds/success.mp3";
import failSound from "../../sounds/error.mp3";
import clickSound from "../../sounds/click.mp3";
import music from "../../sounds/music.mp3";
import soundMenu from "../../sounds/menu.mp3";
import { getStartDeck } from "../../utils/containers/deck/deck";
import {
  incrementScore,
  incrementTimer,
  restartBoard,
  setGuardBoardAllowed,
  setScore,
} from "../../store/actions/board";
import {
  addCompareCard,
  clearCompareCard,
  clickOnCard,
  closeCards,
  restartCards,
  setCardsDeck,
  setStatusTwoCards,
} from "../../store/actions/cards";
import {
  getBoard,
  getDifficult,
  getIsShowSettings,
  getMusicValue,
  getSoundValue,
} from "../../store/reducers/settings";
import { ICard } from "../../store/interfaces/cards";
import {
  clearSavedData,
  SaveNames,
  setSavedData,
} from "../../utils/saveGame/saveGame";

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
  const timerValue = useSelector(getTime);

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
    if (timer.current) {
      setSavedData(SaveNames.CARD, cards);
      setSavedData(SaveNames.SCORE, score);
      setSavedData(SaveNames.TIMER, timerValue);
    }
    checkFinishGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

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
    if (countSuccessCards === cards.length) {
      setShowResult(true);
    }
  };

  const restartGame = (total: number) => {
    clearSavedData();
    playSoundMenu();
    dispatch(closeCards());
    playClickSound();
    setTimeout(() => {
      dispatch(restartBoard());
      playClickSound();
      dispatch(restartCards());
      dispatch(setScore(total));
      // finished game => send Back end
      setShowResult(false);
    }, 1000);
  };

  const changeStatus = (card: ICard) => {
    dispatch(setGuardBoardAllowed(false));
    dispatch(clickOnCard(card));
    if (compareCard && compareCard.id !== card.id) {
      if (compareCard.cardId === card.cardId) {
        setTimeout(() => {
          playSuccessSound();
          dispatch(setStatusTwoCards([card.id, compareCard.id], "successCard"));
          dispatch(incrementScore());
        }, 1000);
      } else {
        setTimeout(() => {
          playFailSound();
          dispatch(setStatusTwoCards([card.id, compareCard.id], "failCard"));
        }, 1000);
      }
      dispatch(clearCompareCard());
    } else {
      dispatch(addCompareCard(card.id));
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
            <Card key={card.id} card={card} changeStatus={changeStatus} />
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
