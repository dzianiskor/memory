import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Menu.module.scss";

const MenuPage: React.FC = () => {
  return (
      <div className={s.menuWrapper} style={{backgroundImage: `url("/img/menu/main.jpg")`}}>
        <div className={s.menu}>
          <div className={s.link}>
            <NavLink
                to="/game"
            >Start Game</NavLink>
          </div>
          <div className={s.link}>
            <NavLink
                to="/statistics"
            >Statistics</NavLink>
          </div>
        </div>
      </div>
  )
};

export default MenuPage;
