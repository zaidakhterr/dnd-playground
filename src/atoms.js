import { atom } from "recoil";
import { v4 as uuid } from "uuid";

export const cardsState = atom({
  key: "cardsState",
  default: {
    [uuid()]: { top: 10, left: 10, text: "Card 1" },
    [uuid()]: { top: 120, left: 10, text: "Card 2" },
  },
});
