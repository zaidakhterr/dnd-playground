import { atom } from "recoil";

export const cardsState = atom({
  key: "cardsState",
  default: {
    a: { top: 10, left: 10, text: "Card 1" },
    b: { top: 120, left: 10, text: "Card 2" },
  },
});
