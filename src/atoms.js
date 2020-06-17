import { atom } from "recoil";
import { v4 as uuid } from "uuid";

export const cardsState = atom({
  key: "cardsState",
  default: {
    [uuid()]: { top: 10, left: 10, height: 100, width: 100, text: "Card 1" },
    [uuid()]: { top: 120, left: 10, height: 80, width: 120, text: "Card 2" },
  },
});

export const filesState = atom({
  key: "filesState",
  default: [],
});
