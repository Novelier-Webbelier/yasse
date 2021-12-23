import { randomNumber } from "../components/random-number.js";

export function randomColor() {
  return `rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, 1)`;
};