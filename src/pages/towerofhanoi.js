import React from "react";
import { useRecoilValue } from "recoil";

import { towerOfHanoi } from "../atoms";
import Tower from "../components/tower";

const TowerOfHanoi = () => {
  const towers = useRecoilValue(towerOfHanoi);
  return (
    <div className="tower-of-hanoi">
      <h1>Tower of Hanoi</h1>
      <div className="towers">
        {Object.keys(towers).map((key) => (
          <Tower key={key} id={key} />
        ))}
      </div>
      {towers["3"].length === 3 && <div className="win">Yayy! You Won</div>}
    </div>
  );
};

export default TowerOfHanoi;
