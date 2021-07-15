import React from "react";
import s from "./GuardBoard.module.scss";

const GuardBoard: React.FC = ({ children }) => {
  const guardAllowed = true;

  const classes = [s.guardBoard];
  if (guardAllowed) {
    classes.push(s.guardBoardAllowed);
  }

  return <div className={classes.join(" ")}>{children}</div>;
};

export default GuardBoard;
