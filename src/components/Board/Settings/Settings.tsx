import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import s from "./Settings.module.scss";
import {
  getArena,
  getBoard,
  getDifficult,
  getMusicValue,
  getSoundValue,
  getWrapperCard,
} from "../../../redux/reducers/settings";
import soundMenu from "../../../sounds/menu.mp3";
import {
  hideSettings,
  setArena,
  setBoard,
  setDifficult,
  setMusicValue,
  setSoundValue,
  setWrapperCard,
} from "../../../redux/actions/settings";
import { getArenaList } from "../../../utils/containers/arena/arena";
import { getBoardList } from "../../../utils/containers/board/board";
import { getWrapperCardList } from "../../../utils/containers/wrapperCard/wrapperCard";
import { getDifficultList } from "../../../utils/containers/difficult/difficult";

const Settings = () => {
  const dispatch = useDispatch();
  const musicValue = useSelector(getMusicValue);
  const soundValue = useSelector(getSoundValue);
  const currentArena = useSelector(getArena);
  const currentBoard = useSelector(getBoard);
  const currentWrapperCard = useSelector(getWrapperCard);
  const currentDifficult = useSelector(getDifficult);
  const [playSoundMenu, playSoundMenuDriver] = useSound(soundMenu, {
    volume: soundValue,
  });

  useEffect(() => {
    return () => {
      playSoundMenuDriver.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.settingsWrapper}>
      <div className={s.settings}>
        <div className={s.settingCard}>
          <div>Music:</div>
          <div>
            <input
              type="range"
              value={musicValue * 100}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setMusicValue(Number.parseInt(e.target.value) / 100))
              }
            />
          </div>
        </div>
        <div className={s.settingCard}>
          <div>Game Sounds:</div>
          <div>
            <input
              type="range"
              value={soundValue * 100}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setSoundValue(Number.parseInt(e.target.value) / 100))
              }
            />
          </div>
        </div>
        <div className={s.settingCard}>
          <div>Type Arena:</div>
          <div>
            {getArenaList().map((arena) =>
              currentArena.id === arena.id ? (
                <button key={arena.id} className={s.active}>
                  {arena.name}
                </button>
              ) : (
                <button
                  key={arena.id}
                  onClick={() => {
                    playSoundMenu();
                    dispatch(setArena(arena));
                  }}
                >
                  {arena.name}
                </button>
              )
            )}
          </div>
        </div>
        <div className={s.settingCard}>
          <div>Type Board:</div>
          <div>
            {getBoardList().map((board) =>
              currentBoard.id === board.id ? (
                <button key={board.id} className={s.active}>
                  {board.name}
                </button>
              ) : (
                <button
                  key={board.id}
                  onClick={() => {
                    playSoundMenu();
                    dispatch(setBoard(board));
                  }}
                >
                  {board.name}
                </button>
              )
            )}
          </div>
        </div>
        <div className={s.settingCard}>
          <div>Type Wrapper Cards:</div>
          <div>
            {getWrapperCardList().map((wrapperCard) =>
              currentWrapperCard.id === wrapperCard.id ? (
                <button key={wrapperCard.id} className={s.active}>
                  {wrapperCard.name}
                </button>
              ) : (
                <button
                  key={wrapperCard.id}
                  onClick={() => {
                    playSoundMenu();
                    dispatch(setWrapperCard(wrapperCard));
                  }}
                >
                  {wrapperCard.name}
                </button>
              )
            )}
          </div>
        </div>
        <div className={s.settingCard}>
          <div>Difficult:</div>
          <div>
            {getDifficultList().map((difficult) =>
              currentDifficult.id === difficult.id ? (
                <button key={difficult.id} className={s.active}>
                  {difficult.value}
                </button>
              ) : (
                <button
                  key={difficult.id}
                  onClick={() => {
                    playSoundMenu();
                    dispatch(setDifficult(difficult));
                  }}
                >
                  {difficult.value}
                </button>
              )
            )}
          </div>
        </div>
        <div className={s.settingCard}>
          <button
            onClick={() => {
              playSoundMenu();
              dispatch(hideSettings());
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
