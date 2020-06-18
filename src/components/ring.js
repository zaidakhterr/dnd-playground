import React, { useEffect, useState, memo } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

import { ItemTypes } from "../ItemTypes";

const Ring = ({ id }) => {
  return (
    <div
      className="ring"
      style={{
        display: "inline-block",
        opacity: 1,
        backgroundColor: id === 1 ? "#56a8eb" : id === 2 ? "#eb56be" : "#86e46f",
      }}
    >
      {id}
    </div>
  );
};

const DraggableRing = ({ id, tower, towerId }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { id, towerId, type: ItemTypes.RING },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => {
      return tower[tower.length - 1] === id;
    },
  });

  useEffect(() => {
    preview(getEmptyImage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={drag}
      style={{
        display: isDragging ? "none" : "inline-block",
        width: `calc(100% / ${3 / id} - 20px)`,
      }}
    >
      <Ring id={id} />
    </div>
  );
};

export const RingPreview = memo(({ id }) => {
  const [width, setWidth] = useState(30);
  useEffect(() => {
    let container = document.getElementsByClassName("tower")[0];
    setWidth(container.clientWidth);
  }, []);

  return (
    <div
      style={{
        display: "inline-block",
        width: `calc(${width}px / ${3 / id} - 20px)`,
      }}
    >
      <Ring id={id} />
    </div>
  );
});

export default DraggableRing;
