import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Drag n Drop Playground!</h1>
      <nav>
        <Link to="/drag-around">Drag Around</Link>
        <Link to="/file-drop">File Drop</Link>
      </nav>
    </div>
  );
};

export default HomePage;
