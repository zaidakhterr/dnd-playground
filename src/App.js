import "./App.scss";

import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const App = () => {
  return (
    <div className="app">
      <Card text="Card 1" />
    </div>
  );
};

const Card = ({ text }) => {
  const [, drag] = useDrag({ item: { type: ItemTypes.CARD } });
  return (
    <div
      ref={drag}
      className="card"
      style={{
        width: 200,
        height: 300,
        textAlign: "center",
        textTransform: "uppercase",
        padding: 20,
        margin: 20,
        backgroundColor: "#f5f5f5",
        border: "1px solid #d9d9d9",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>{text}</h3>
    </div>
  );
};

export default App;
