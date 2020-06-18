import React from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../ItemTypes";

const Tower = () => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
  });
  return <div ref={drop} className="tower" />;
};

export default Tower;
