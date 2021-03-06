import React, { useEffect } from "react";
import s from "./Result.module.scss";
import { useSelector } from "react-redux";
import { getScore, getTime } from "../../../store/reducers/board";
import getFormatTime from "../../../utils/timer/timer";

interface IResult {
  timerIntervalId: NodeJS.Timeout | null;
  restartGame: (total: number) => void;
}

const Result: React.FC<IResult> = ({ timerIntervalId, restartGame }) => {
  const score: number = useSelector(getScore);
  const timer: number = useSelector(getTime);
  const bonus: number = 5;
  const total: number = score + bonus;

  useEffect(() => {
    if (timerIntervalId) {
      clearInterval(timerIntervalId);
    }
  }, [timerIntervalId]);

  return (
    <div className={s.resultWrapper}>
      <div className={s.result}>
        <div className={s.resultSection}>
          <h1>You win!</h1>
        </div>
        <div>
          <div className={s.resultSection}>
            <h2>Time: {getFormatTime(timer)}</h2>
          </div>
          <div className={s.resultSection}>
            <h2>Score: {score}</h2>
          </div>
          <div className={s.resultSection}>
            <h2>Bonus: {bonus}</h2>
          </div>
          <div className={s.resultSection}>
            <h2 className={s.total}>Total: {total}</h2>
          </div>
        </div>
        <div className={s.resultSection}>
          <button onClick={() => restartGame(total)}>Restart</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
