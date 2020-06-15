import React, { memo } from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../ItemTypes";

const Card = ({ id, top, left, text, hideSourceOnDrag }) => {
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
};

export default memo(Card);
