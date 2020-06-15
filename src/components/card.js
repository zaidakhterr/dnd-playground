import React, { memo } from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../ItemTypes";

const Card = ({ id, top, left, text }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.CARD },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <div
      ref={drag}
      className="card"
      style={{
        width: 200,
        height: 100,
        top,
        left,
      }}
    >
      <h3>{text}</h3>
    </div>
  );
};

export default memo(Card);
