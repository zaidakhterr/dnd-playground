import React, { memo, useState } from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../ItemTypes";

const Card = ({ id, top, left, width, height, text: initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

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
      onDoubleClick={() => {
        setIsEditing(true);
      }}
      onMouseLeave={() => {
        setIsEditing(false);
      }}
    >
      {isEditing ? (
        <input
          value={text}
          type="text"
          autoFocus
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default memo(Card);
