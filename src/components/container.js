import React from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import { useRecoilState } from "recoil";

import { ItemTypes } from "../ItemTypes";
import { cardsState } from "../atoms";
import Card from "./card";

const Container = () => {
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
        return <Card id={key} {...props} />;
      })}
    </div>
  );
};

export default Container;
