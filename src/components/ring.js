import React from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../ItemTypes";

const Ring = ({ id }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, type: ItemTypes.RING },
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
      className="ring"
      style={{
        width: `calc(100% / ${3 / id} - 20px)`,
        backgroundColor: id === 1 ? "56a8eb" : id === 2 ? "#eb56be" : "#86e46f",
      }}
    >
      {id}
    </div>
  );
};

export default Ring;
