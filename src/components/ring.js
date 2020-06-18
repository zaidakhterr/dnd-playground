import React from "react";
import { useDrag } from "react-dnd";
import { useRecoilValue } from "recoil";

import { towerOfHanoi } from "../atoms";
import { ItemTypes } from "../ItemTypes";

const Ring = ({ id, towerId }) => {
  const towers = useRecoilValue(towerOfHanoi);

  const [{ canDrag, isDragging }, drag] = useDrag({
    item: { id, towerId, type: ItemTypes.RING },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      canDrag: monitor.canDrag(),
    }),
    canDrag: () => {
      const tower = [...towers[towerId]];
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
        cursor: canDrag ? "move" : "not-allowed",
        width: `calc(100% / ${3 / id} - 20px)`,
        backgroundColor: id === 1 ? "56a8eb" : id === 2 ? "#eb56be" : "#86e46f",
      }}
    >
      {id}
    </div>
  );
};

export default Ring;
