import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import s from "./Card.module.scss";
import clickSound from "../../../sounds/click.mp3";
import hoverSound from "../../../sounds/hover.mp3";
import { ICard } from "../../../store/interfaces/cards";
import {
  getSoundValue,
  getWrapperCard,
} from "../../../store/reducers/settings";

interface ICardFunc {
  card: ICard;
  changeStatus: (card: ICard) => void;
}

const Card: React.FC<ICardFunc> = ({ card, changeStatus }) => {
  const wrapperCard = useSelector(getWrapperCard);
  const pathHero = `/img/heroes/${card.path}`;
  const pathWrapper = `/img/wrappers/${wrapperCard.path}`;
  const soundValue = useSelector(getSoundValue);

  const [playClickSound, playClickSoundDriver] = useSound(clickSound, {
    volume: soundValue,
  });
  const [playHoverSound, playHoverSoundDriver] = useSound(hoverSound, {
    volume: soundValue,
  });

  const classes = [s.gCard]; // clicked, successCard, failCard
  if (card.status) {
    classes.push(s[card.status]);
  }

  useEffect(() => {
    return () => {
      playClickSoundDriver.stop();
      playHoverSoundDriver.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classes.join(" ")}
      onClick={() => {
        playClickSound();
        changeStatus(card);
      }}
      onMouseEnter={() => playHoverSound()}
    >
      <div className={s.front}>
        <img src={pathWrapper} alt="Wrapper" />
      </div>
      <div className={s.back}>
        <img src={pathHero} alt="Hero" />
      </div>
    </div>
  );
};

export default Card;
