import React from "react";

import Container from "../components/container";
import AddCardForm from "../components/addcardform";

const MoveAroundPage = () => {
  return (
    <div className="move">
      <AddCardForm />
      <Container />
    </div>
  );
};

export default MoveAroundPage;
