import "./App.scss";

import React from "react";
import { Router } from "@reach/router";

import MoveAroundPage from "./pages/movearound";
import HomePage from "./pages/home";
import FileDropPage from "./pages/filedrop";

const App = () => {
  return (
    <div className="app">
      <Router>
        <HomePage path="/" />
        <MoveAroundPage path="/drag-around" />
        <FileDropPage path="/file-drop" />
      </Router>
    </div>
  );
};

export default App;
