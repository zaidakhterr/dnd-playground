import React from "react";
import Ring from "../components/ring";

const TowerOfHanoi = () => {
  return (
    <div className="tower-of-hanoi">
      <h1>Tower of Hanoi</h1>
      <div className="tower">
        <Ring id={1} />
        <Ring id={2} />
        <Ring id={3} />
      </div>
    </div>
  );
};

export default TowerOfHanoi;
