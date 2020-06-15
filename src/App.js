import "./App.scss";

import React, { memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";
import { useRecoilState } from "recoil";

import { ItemTypes } from "./ItemTypes";
import { cardsState } from "./atoms";

const App = () => {
  return (
    <div className="app">
      <Container hideSourceOnDrag={true} />
    </div>
  );
};

const Container = ({ hideSourceOnDrag }) => {
  const [cards, setCards] = useRecoilState(cardsState);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      move(item.id, left, top);
      return undefined;
    },
  });

  const move = (id, left, top) => {
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
      {Object.keys(cards).map((key) => {
        const props = cards[key];
        return <Card id={key} hideSourceOnDrag={hideSourceOnDrag} {...props} />;
      })}
    </div>
  );
};

const Card = memo(({ id, top, left, text, hideSourceOnDrag }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.CARD },
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
        cursor: "move",
        top,
        left,
      }}
    >
      <h3>{text}</h3>
    </div>
  );
});

export default App;
