import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";

import { towerOfHanoi, towerOfHanoiMoves } from "../atoms";
import Tower from "../components/tower";
import DragLayer from "../components/draglayer";

const TowerOfHanoi = () => {
  const towers = useRecoilValue(towerOfHanoi);
  const moves = useRecoilValue(towerOfHanoiMoves);

  const resetTowers = useResetRecoilState(towerOfHanoi);
  const resetMoves = useResetRecoilState(towerOfHanoiMoves);

  const message = moves === 7 ? "Perfect Score." : moves > 7 && moves < 14 ? "Good Score." : "But you can do better.";

  const handleReplay = () => {
    resetMoves();
    resetTowers();
  };

  return (
    <div className="tower-of-hanoi">
      <h1>Tower of Hanoi</h1>
      <p>Moves : {moves}</p>
      <DragLayer />
      <div className="towers">
        {Object.keys(towers).map((key) => (
          <Tower key={key} id={key} />
        ))}
      </div>
      {towers["3"].length === 3 && (
        <div className="win">
          <p>Yayy! You Won. {message}</p>
          <button className="lg" onClick={handleReplay}>
            Play Again
          </button>
        </div>
      )}
      {moves > 0 && towers["3"].length !== 3 && (
        <div className="win">
          <button className="lg" onClick={handleReplay}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default TowerOfHanoi;
