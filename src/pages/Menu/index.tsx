import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import s from "./Menu.module.scss";
import soundMenu from "../../sounds/menu.mp3";
import { getSoundValue } from "../../redux/reducers/settings";

const MenuPage: React.FC = () => {
  const soundValue = useSelector(getSoundValue);
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
    <div
      className={s.menuWrapper}
      style={{ backgroundImage: `url("/img/menu/main.jpg")` }}
    >
      <div className={s.menu}>
        <div className={s.link}>
          <NavLink to="/game" onClick={() => playSoundMenu()}>
            Start Game
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink to="/statistics" onClick={() => playSoundMenu()}>
            Statistics
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
