import React from "react";
import s from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={s.buttonGroupWrapper}>
        <div className={s.buttonGroup}>
          <button className={s.settingButton}>
            <img src="/img/back.png" alt="back-menu" />
          </button>
        </div>
        <div className={s.buttonGroup}>
          <button className={s.settingButton}>
            <img src="/img/full_screen1.png" alt="full_screen" />
          </button>
        </div>
        <div className={s.buttonGroup}>
          <button className={s.settingButton}>
            <img src="/img/setting.png" alt="setting-button" />
          </button>
        </div>
      </div>
      <div className={s.footerLinks}>
        <span>
          <a href="https://github.com/dzianiskor/react-game">GitHub</a>
        </span>
        <span>
          <a href="https://www.youtube.com/watch?v=Z4ClOMxCYy8">YouTube</a>
        </span>
        <span>
          <a href="https://rs.school/js/">RS.School</a>
        </span>
        <span>© 2021</span>
      </div>
    </footer>
  );
};

export default Footer;
