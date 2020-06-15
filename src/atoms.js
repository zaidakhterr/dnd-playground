import { atom } from "recoil";

export const cardsState = atom({
  key: "cardsState",
  default: {
    a: { top: 10, left: 10, text: "Card 1" },
    b: { top: 200, left: 300, text: "Card 2" },
  },
});
