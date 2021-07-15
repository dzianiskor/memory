import React from "react";
import Header from "../../components/Header/Header";
import s from "./Game.module.scss";

const GamePage: React.FC = () => {
  return (
    <div
      className={s.mainContainer}
      style={{ backgroundImage: `url("/img/backgrounds/6.jpg")` }}
    >
      <Header />
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
};

export default GamePage;
