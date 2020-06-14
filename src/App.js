import "./App.scss";

import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const App = () => {
  return (
    <div className="app">
      <Container />
    </div>
  );
};

const Container = ({}) => {
  return (
    <div
      style={{
        width: 800,
        height: 500,
        margin: 20,
        border: "2px solid #222",
        borderRadius: 3,
        position: "relative",
      }}
    >
      <Card top={10} left={10} text="Card 1" hideSourceOnDrag={true} />
    </div>
  );
};

const Card = ({ top, left, text, hideSourceOnDrag }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }

  return (
    <div
      ref={drag}
      className="card"
      style={{
        width: 200,
        height: 100,
        textAlign: "center",
        textTransform: "uppercase",
        padding: 20,
        backgroundColor: "#f5f5f5",
        border: "1px solid #d9d9d9",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top,
        left,
      }}
    >
      <h3>{text}</h3>
    </div>
  );
};

export default App;
