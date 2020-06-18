import React from "react";
import { useRecoilValue } from "recoil";

import { towerOfHanoi, towerOfHanoiMoves } from "../atoms";
import Tower from "../components/tower";

const TowerOfHanoi = () => {
  const towers = useRecoilValue(towerOfHanoi);
  const moves = useRecoilValue(towerOfHanoiMoves);

  const message = moves === 7 ? "Perfect Score." : moves > 7 && moves < 14 ? "Good Score." : "But you can do better.";

  return (
    <div className="tower-of-hanoi">
      <h1>Tower of Hanoi</h1>
      <p>Moves : {moves}</p>
      <div className="towers">
        {Object.keys(towers).map((key) => (
          <Tower key={key} id={key} />
        ))}
      </div>
      {towers["3"].length === 3 && <div className="win">Yayy! You Won. {message}</div>}
    </div>
  );
};

export default TowerOfHanoi;
