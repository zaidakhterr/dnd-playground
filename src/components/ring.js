import React from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../ItemTypes";

const Ring = ({ id, tower, towerId }) => {
  const [{ canDrag, isDragging }, drag] = useDrag({
    item: { id, towerId, type: ItemTypes.RING },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      canDrag: monitor.canDrag(),
    }),
    canDrag: () => {
      return tower[tower.length - 1] === id;
    },
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
