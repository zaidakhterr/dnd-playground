import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
