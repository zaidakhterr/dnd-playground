import React from "react";

import { ItemTypes } from "../ItemTypes";
import { RingPreview } from "./ring";
import { useDragLayer } from "react-dnd";

const DragLayer = () => {
  const { item, itemType, isDragging, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),

    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  const itemStyles = () => {
    if (!currentOffset) {
      return { display: "none" };
    }

    let { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
      transform,
      WebkitTransform: transform,
    };
  };

  const renderItem = () => {
    switch (itemType) {
      case ItemTypes.RING:
        return <RingPreview id={item.id} />;
      default:
        return null;
    }
  };

  if (!isDragging) {
    return null;
  }

  return (
    <div className="layer">
      <div style={itemStyles()}>{renderItem()}</div>
    </div>
  );
};

export default DragLayer;
