import React from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../ItemTypes";
import Ring from "./ring";

const Tower = ({ tower }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
  });
  return (
    <div ref={drop} className="tower">
      {tower.map((ring) => (
        <Ring id={ring} />
      ))}
    </div>
  );
};

export default Tower;
