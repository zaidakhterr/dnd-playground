import React from "react";
import { useDrop } from "react-dnd";
import { useRecoilState } from "recoil";
import update from "immutability-helper";

import { towerOfHanoi } from "../atoms";
import { ItemTypes } from "../ItemTypes";
import Ring from "./ring";

const Tower = ({ tower, id }) => {
  const [towers, setTowers] = useRecoilState(towerOfHanoi);

  const handleDrop = (itemId) => {
    const newTower = [...towers[id]];
    newTower.push(itemId);
    setTowers(update(towers, { $merge: { [id]: newTower } }));
  };

  const [, drop] = useDrop({
    accept: ItemTypes.RING,
    drop: (item, monitor) => {
      handleDrop(item.id);
    },
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
