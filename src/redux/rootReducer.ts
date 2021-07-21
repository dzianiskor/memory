import { combineReducers } from "redux";
import cards from "./reducers/cards";
import settings from "./reducers/settings";

const rootReducer = () =>
  combineReducers({
    cards,
    settings,
  });

export default rootReducer;
