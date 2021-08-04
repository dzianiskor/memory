import React from "react";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { FullScreenHandler } from "./hoc/FullScreenHandler";

function App() {
  const isAuthenticated: boolean = true;
  const handle = useFullScreenHandle();
  const routes = useRoutes(isAuthenticated);

  return (
    <FullScreen handle={handle}>
      <FullScreenHandler.Provider value={handle}>
        <Router>{routes}</Router>
      </FullScreenHandler.Provider>
    </FullScreen>
  );
}

export default App;
