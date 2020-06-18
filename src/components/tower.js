import React, { useEffect, memo } from "react";
import { useDrop } from "react-dnd";
import { useRecoilState, useSetRecoilState } from "recoil";
import update from "immutability-helper";

import { towerOfHanoi, towerOfHanoiMoves } from "../atoms";
import { ItemTypes } from "../ItemTypes";
import Ring from "./ring";

const Tower = memo(({ id }) => {
  const [towers, setTowers] = useRecoilState(towerOfHanoi);
  const setMoves = useSetRecoilState(towerOfHanoiMoves);

  const [, drop] = useDrop({
    accept: ItemTypes.RING,
    drop: (item) => {
      handleDrop(item.id, item.towerId);
      console.log(item);
    },
    canDrop: (item) => {
      if (towers[id].length === 0) return true;
      return towers[id][towers[id].length - 1] > item.id;
    },
  });

  const handleDrop = (itemId, towerId) => {
    const newTower = [...towers[id]];
    newTower.push(itemId);

    const newPrevTower = [...towers[towerId]];
    newPrevTower.pop();

    setTowers(update(towers, { $merge: { [id]: newTower, [towerId]: newPrevTower } }));

    setMoves((n) => n + 1);
  };

  useEffect(() => {
    console.log(towers);
  }, [towers]);

  return (
    <div ref={drop} className="tower">
      {towers[id].map((ring) => (
        <Ring id={ring} towerId={id} tower={towers[id]} />
      ))}
    </div>
  );
});

export default Tower;
