import { ICard } from "../../store/interfaces/cards";
import { IMainProperties } from "../../store/interfaces/settings";
import { IDifficult } from "../containers/difficult/difficult";

export enum SaveNames {
  CARD = "CARD",
  SCORE = "SCORE",
  TIMER = "TIMER",
  MUSIC = "MUSIC",
  SOUND = "SOUND",
  ARENA = "ARENA",
  BOARD = "BOARD",
  WRAPPER_CARD = "WRAPPER_CARD",
  DIFFICULT = "DIFFICULT",
}

type SaveTypes = ICard[] | IMainProperties | IDifficult | number;

export function getSavedData(name: SaveNames): SaveTypes | null {
  const data = localStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  }

  return null;
}

export function setSavedData(name: SaveNames, data: SaveTypes): void {
  localStorage.setItem(name, JSON.stringify(data));
}

export function clearSavedData(): void {
  localStorage.removeItem(SaveNames.CARD);
  localStorage.removeItem(SaveNames.TIMER);
}
