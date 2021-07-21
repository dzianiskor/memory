import React from "react";
import s from "./Header.module.scss";
import { useSelector } from "react-redux";
import { getScore, getTime } from "../../redux/reducers/board";

const Header: React.FC = () => {
  const score: number = useSelector(getScore);
  const timer: number = useSelector(getTime);

  let timerSeconds: number = timer % 60;
  let timerMinutes: number = Math.floor(timer / 60);

  const getFormatTime = () => {
    let minutes =
      timerMinutes < 1
        ? "00"
        : timerMinutes < 10
        ? `0${timerMinutes}`
        : timerMinutes;
    let seconds =
      timerSeconds < 1
        ? "00"
        : timerSeconds < 10
        ? `0${timerSeconds}`
        : timerSeconds;

    return `${minutes}:${seconds}`;
  };

  return (
    <header>
      <div className={s.score}>
        <span className={s.avatarBorder}>
          <img src="/img/user.svg" alt="avatar-border" />
        </span>
        <span className={s.avatar}>
          <img
            src="https://avatars.githubusercontent.com/u/45198847?v=4"
            alt="avatar"
          />
        </span>
        <span>Player...&nbsp;:&nbsp;</span>

        <span className={s.scoreCount}>{score > 99999 ? `99999+` : score}</span>
      </div>
      <div className={s.timer}>Time {getFormatTime()}</div>
    </header>
  );
};

export default Header;
