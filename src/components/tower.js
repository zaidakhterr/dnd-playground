import React, { memo } from "react";
import { useDrop } from "react-dnd";
import { useRecoilState } from "recoil";
import update from "immutability-helper";

import { towerOfHanoi } from "../atoms";
import { ItemTypes } from "../ItemTypes";
import Ring from "./ring";

const Tower = ({ id }) => {
  const [towers, setTowers] = useRecoilState(towerOfHanoi);

  const [, drop] = useDrop({
    accept: ItemTypes.RING,
    drop: (item) => {
      handleDrop(item.id);
    },
  });

  const handleDrop = (itemId) => {
    const newTower = [...towers[id]];
    newTower.push(itemId);
    setTowers(update(towers, { $merge: { [id]: newTower } }));
  };

  return (
    <div ref={drop} className="tower">
      {towers[id].map((ring) => (
        <Ring id={ring} towerId={id} />
      ))}
    </div>
  );
};

export default memo(Tower);
