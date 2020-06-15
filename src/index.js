import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RecoilRoot } from "recoil";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
