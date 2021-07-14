import React from "react";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

function App() {
  const isAuthenticated: boolean = false;

  const routes = useRoutes(isAuthenticated);
  return <Router>{routes}</Router>;
}

export default App;
