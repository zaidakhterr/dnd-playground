import "./App.scss";

import React from "react";
import { Router } from "@reach/router";

import MoveAroundPage from "./pages/movearound";
import HomePage from "./pages/home";

const App = () => {
  return (
    <div className="app">
      <Router>
        <HomePage path="/" />
        <MoveAroundPage path="/move-around" />
      </Router>
    </div>
  );
};

export default App;
