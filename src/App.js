import "./App.scss";

import React from "react";
import { Router } from "@reach/router";

import MoveAroundPage from "./pages/movearound";
import HomePage from "./pages/home";
import FileDropPage from "./pages/filedrop";
import TowerOfHanoi from "./pages/towerofhanoi";

const App = () => {
  return (
    <div className="app">
      <Router>
        <HomePage path="/" />
        <MoveAroundPage path="/drag-around" />
        <FileDropPage path="/file-drop" />
        <TowerOfHanoi path="/tower-of-hanoi" />
      </Router>
    </div>
  );
};

export default App;
