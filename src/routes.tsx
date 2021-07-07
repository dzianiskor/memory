import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GamePage from "./pages/Game";
import StatisticsPage from "./pages/Statistics";
import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/game" exact>
          <GamePage />
        </Route>
        <Route path="/statistics" exact>
          <StatisticsPage />
        </Route>
        <Route path="/" exact>
          <MenuPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
