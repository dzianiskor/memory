import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import s from "./Footer.module.scss";
import soundMenu from "../../sounds/menu.mp3";
import { getSoundValue } from "../../redux/reducers/settings";

const Footer: React.FC = () => {
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
    <footer>
      <div className={s.buttonGroupWrapper}>
        <div className={s.buttonGroup}>
          <NavLink to="/" onClick={() => playSoundMenu()}>
            <button className={s.settingButton}>
              <img src="/img/back.png" alt="back-menu" />
            </button>
          </NavLink>
        </div>
        <div className={s.buttonGroup}>
          <button className={s.settingButton} onClick={() => playSoundMenu()}>
            <img src="/img/full_screen1.png" alt="full_screen" />
          </button>
        </div>
        <div className={s.buttonGroup}>
          <button className={s.settingButton} onClick={() => playSoundMenu()}>
            <img src="/img/setting.png" alt="setting-button" />
          </button>
        </div>
      </div>
      <div className={s.footerLinks}>
        <span>
          <a
            href="https://github.com/dzianiskor/memory"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/dzianiskor/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </span>
        <span>© 2021</span>
      </div>
    </footer>
  );
};

export default Footer;
