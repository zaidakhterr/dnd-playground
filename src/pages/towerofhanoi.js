import React from "react";
import { useRecoilValue } from "recoil";

import Ring from "../components/ring";
import { towerOfHanoi } from "../atoms";
import Tower from "../components/tower";

const TowerOfHanoi = () => {
  const towers = useRecoilValue(towerOfHanoi);
  return (
    <div className="tower-of-hanoi">
      <h1>Tower of Hanoi</h1>
      <div className="towers">
        {towers.map((tower) => (
          <Tower tower={tower} />
        ))}
      </div>
    </div>
  );
};

export default TowerOfHanoi;
