import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Drag n Drop Playground!</h1>
      <nav>
        <Link to="/move-around">Move Around</Link>
      </nav>
    </div>
  );
};

export default HomePage;
