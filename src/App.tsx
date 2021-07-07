import React from "react";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.module.scss";

function App() {
  const isAuthenticated: boolean = true;

  const routes = useRoutes(isAuthenticated);
  return <Router>{routes}</Router>;
}

export default App;
