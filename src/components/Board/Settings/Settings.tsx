import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import s from "./Settings.module.scss";
import { getSoundValue } from "../../../redux/reducers/settings";
import soundMenu from "../../../sounds/menu.mp3";
import { hideSettings } from "../../../redux/actions/settings";

const Settings = () => {
  const dispatch = useDispatch();
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
    <div className={s.settingsWrapper}>
      <div className={s.settings}>
        <div className={s.settingCard}>
          <div>Music:</div>
          <div>
            <input type="range" value={30} />
          </div>
        </div>
        <div className={s.settingCard}>
          <div>Game Sounds:</div>
          <div>
            <input type="range" value={50} />
          </div>
        </div>
        <div className={s.settingCard}>
          <div>Type Arena:</div>
        </div>
        <div className={s.settingCard}>
          <div>Type Board:</div>
        </div>
        <div className={s.settingCard}>
          <div>Type Wrapper Cards:</div>
        </div>
        <div className={s.settingCard}>
          <div>Difficult:</div>
        </div>
        <div className={s.settingCard}>
          <button
            onClick={() => {
              playSoundMenu();
              dispatch(hideSettings());
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
