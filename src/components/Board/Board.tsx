import React, { useState } from "react";
import GuardBoard from "./GuardBoard/GuardBoard";
import Card from "./Card/Card";
import s from "./Board.module.scss";

const Board: React.FC = () => {
  const cards = [
    { id: 1, cardId: 1, status: "" },
    { id: 2, cardId: 1, status: "" },
    { id: 3, cardId: 2, status: "" },
    { id: 4, cardId: 2, status: "" },
    { id: 5, cardId: 3, status: "" },
    { id: 6, cardId: 3, status: "" },
    { id: 7, cardId: 4, status: "" },
    { id: 8, cardId: 4, status: "" },
    { id: 9, cardId: 5, status: "" },
    { id: 10, cardId: 5, status: "" },
    { id: 11, cardId: 6, status: "" },
    { id: 12, cardId: 6, status: "" },
    { id: 13, cardId: 7, status: "" },
    { id: 14, cardId: 7, status: "" },
    { id: 15, cardId: 8, status: "" },
    { id: 16, cardId: 8, status: "" },
    { id: 17, cardId: 9, status: "" },
    { id: 18, cardId: 9, status: "" },
    { id: 19, cardId: 10, status: "" },
    { id: 20, cardId: 10, status: "" },
  ];

  const [status, setStatus] = useState("");
  const changeStatus = () => {
    setStatus(() => "clicked");
    setTimeout(() => {
      setStatus("successCard");
      //setStatus("failCard");
    }, 2000);
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
          {cards.map((card) => (
            <Card
              key={card.id}
              cardId={card.cardId}
              status={status}
              changeStatus={changeStatus}
            />
          ))}
        </GuardBoard>
      </div>
    </div>
  );
};

export default Board;
