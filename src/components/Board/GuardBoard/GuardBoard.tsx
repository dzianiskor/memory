import React from "react";
import s from "./GuardBoard.module.scss";
import { useSelector } from "react-redux";
import { getGuardBoardAllowed } from "../../../redux/reducers/board";

const GuardBoard: React.FC = ({ children }) => {
  const guardAllowed = useSelector(getGuardBoardAllowed);

  const classes = [s.guardBoard];
  if (guardAllowed) {
    classes.push(s.guardBoardAllowed);
  }

  return <div className={classes.join(" ")}>{children}</div>;
};

export default GuardBoard;
