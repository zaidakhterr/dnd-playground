import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuid } from "uuid";
import update from "immutability-helper";

import { cardsState } from "../atoms";

const AddCardForm = () => {
  const [text, setText] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [cards, setCards] = useRecoilState(cardsState);

  const addCard = (e) => {
    e.preventDefault();
    setCards(
      update(cards, {
        [uuid()]: {
          $set: { top: y, left: x, text },
        },
      })
    );
    setText("");
    setX(0);
    setY(0);
  };

  return (
    <div className="add-card-form">
      <h2>Add New Card</h2>
      <form onSubmit={addCard}>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            autoComplete="off"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            id="text"
            name="text"
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <div className="form-group-sub">
            <div className="form-group-sub-sub">
              <label htmlFor="x">X:</label>
              <input
                autoComplete="off"
                value={x}
                onChange={(e) => {
                  setX(Number(e.target.value));
                }}
                type="text"
                id="x"
                name="x"
              />
            </div>
            <div className="form-group-sub-sub">
              <label htmlFor="y">Y:</label>
              <input
                autoComplete="off"
                value={y}
                onChange={(e) => {
                  setY(Number(e.target.value));
                }}
                type="text"
                id="y"
                name="y"
              />
            </div>
          </div>
        </div>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default AddCardForm;
