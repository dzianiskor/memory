import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import s from "./Game.module.scss";
import Board from "../../components/Board/Board";
import { useSelector } from "react-redux";
import { getArena } from "../../redux/reducers/settings";

const GamePage: React.FC = () => {
  const arena = useSelector(getArena);
  return (
    <div
      className={s.mainContainer}
      style={{ backgroundImage: `url("/img/backgrounds/${arena.path}")` }}
    >
      <Header />
      <main>
        <Board />
      </main>
      <Footer />
    </div>
  );
};

export default GamePage;
