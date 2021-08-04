import React from "react";

export interface IFullScreenHandle {
  active: boolean;
  enter: () => Promise<void>;
  exit: () => Promise<void>;
  node: React.MutableRefObject<HTMLDivElement | null>;
}

// @ts-ignore
export const FullScreenHandler = React.createContext();
