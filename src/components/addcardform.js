import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuid } from "uuid";
import update from "immutability-helper";

import { cardsState } from "../atoms";

const AddCardForm = () => {
  const [text, setText] = useState("");
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [cards, setCards] = useRecoilState(cardsState);

  const addCard = (e) => {
    e.preventDefault();
    setCards(
      update(cards, {
        [uuid()]: {
          $set: { top, left, text, width, height },
        },
      })
    );
    setText("");
    setTop(0);
    setLeft(0);
    setWidth(100);
    setHeight(100);
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
              <label htmlFor="x">X</label>
              <input
                autoComplete="off"
                value={left}
                onChange={(e) => {
                  setLeft(Number(e.target.value));
                }}
                type="text"
                id="x"
                name="x"
              />
            </div>
            <div className="form-group-sub-sub">
              <label htmlFor="y">Y</label>
              <input
                autoComplete="off"
                value={top}
                onChange={(e) => {
                  setTop(Number(e.target.value));
                }}
                type="text"
                id="y"
                name="y"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Size</label>
          <div className="form-group-sub">
            <div className="form-group-sub-sub">
              <label htmlFor="x">Width</label>
              <input
                autoComplete="off"
                value={width}
                onChange={(e) => {
                  setWidth(Number(e.target.value));
                }}
                type="text"
                id="x"
                name="x"
              />
            </div>
            <div className="form-group-sub-sub">
              <label htmlFor="y">Height</label>
              <input
                autoComplete="off"
                value={height}
                onChange={(e) => {
                  setTop(Number(e.target.value));
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
