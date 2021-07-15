import React from "react";
import s from "./Card.module.scss";

interface ICard {
  cardId: number;
  status: string;
  changeStatus: () => void;
}

const Card: React.FC<ICard> = ({ cardId, status, changeStatus }) => {
  const pathHero = `/img/heroes/${cardId}.png`;
  const pathWrapper = `/img/wrappers/1.png`;

  const classes = [s.gCard]; // clicked, successCard, failCard
  if (status) {
    classes.push(s[status]);
  }

  return (
    <div className={classes.join(" ")} onClick={() => changeStatus()}>
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
