import "./App.scss";

import React from "react";

import Container from "./components/container";

const App = () => {
  return (
    <div className="app">
      <Container hideSourceOnDrag={true} />
    </div>
  );
};

export default App;
