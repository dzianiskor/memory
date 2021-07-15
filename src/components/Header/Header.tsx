import React from "react";
import s from "./Header.module.scss";

const Header: React.FC = () => (
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
      <span>Player:&nbsp;</span>
      <span className={s.scoreCount}>100</span>
    </div>
    <div className={s.timer}>Time 00:00</div>
  </header>
);

export default Header;
