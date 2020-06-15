import "./App.scss";

import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";

import { ItemTypes } from "./ItemTypes";

const App = () => {
  return (
    <div className="app">
      <Container />
    </div>
  );
};

const Container = () => {
  const [cards, setCards] = useState([0, 1]);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      console.log("DROP", item, delta);
      // const top = Math.round(item.top + delta.y);
      // const left = Math.round(item.left + delta.x);
      // move(item.id, left, top);
      return undefined;
    },
  });

  const move = (id, top, left) => {
    setCards(
      update(cards, {
        [id]: {
          $merge: { top, left },
        },
      })
    );
  };

  return (
    <div
      ref={drop}
      style={{
        width: "calc(100vw - 40px)",
        height: "calc(100vh - 40px)",
        margin: 20,
        border: "2px solid #222",
        borderRadius: 3,
        position: "relative",
      }}
    >
      {cards.map((id) => (
        <Card key={id} id={id} topi={10 * id} lefti={40 * id} />
      ))}
    </div>
  );
};

const Card = ({ id, topi, lefti }) => {
  const [top, setTop] = useState(topi);
  const [left, setLeft] = useState(lefti);
  const [text, setText] = useState("hi");

  const [{ please, isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.CARD },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      please: monitor.getDifferenceFromInitialOffset(),
    }),
    end: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      console.log(delta);
      const top = Math.round(item.top + delta.y);
      const left = Math.round(item.left + delta.x);
      move(top, left);
      return undefined;
    },
  });

  console.log({ please });

  const move = (newTop, newLeft) => {
    setTop(newTop);
    setLeft(newLeft);
  };

  // if (isDragging) {
  //   return <div ref={drag} />;
  // }

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
        cursor: "move",
        top,
        left,
      }}
    >
      <h3>{text}</h3>
    </div>
  );
};

export default App;
