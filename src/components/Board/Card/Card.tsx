import React from "react";
import s from "./Card.module.scss";

interface ICard {
  id: number | string;
  cardId: number | string;
  status: string;
  changeStatus: (id: string | number, cardId: string | number) => void;
}

const Card: React.FC<ICard> = ({ id, cardId, status, changeStatus }) => {
  const pathHero = `/img/heroes/${cardId}.png`;
  const pathWrapper = `/img/wrappers/1.png`;

  const classes = [s.gCard]; // clicked, successCard, failCard
  if (status) {
    classes.push(s[status]);
  }

  return (
    <div className={classes.join(" ")} onClick={() => changeStatus(id, cardId)}>
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
