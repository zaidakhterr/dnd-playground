import React, { memo } from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../ItemTypes";

const Card = ({ id, top, left, width, height, text }) => {
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
        width,
        height,
        top,
        left,
      }}
    >
      <h4>{text}</h4>
    </div>
  );
};

export default memo(Card);
