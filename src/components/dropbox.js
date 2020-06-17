import React from "react";
import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";

const DropBox = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: NativeTypes.FILE,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  return (
    <div ref={drop} className="drop-box" style={{ opacity: isActive ? 0.8 : 1 }}>
      {isActive ? "Release to drop" : "Drag File here"}
    </div>
  );
};

export default DropBox;
