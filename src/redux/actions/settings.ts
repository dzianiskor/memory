import { SettingsActionTypes } from "../actionTypes/settings";
import { IMainProperties } from "../reducers/settings";

export function setArena(arena: IMainProperties) {
  return {
    type: SettingsActionTypes.SET_ARENA,
    payload: arena,
  };
}
