import * as random from "../components/random-number.js";

export function flip(tag) {
  tag.style.transform = `rotateX(180deg)`;
};

export function reverse(tag) {
  tag.style.transform = `rotateY(180deg)`;
};

export function rotate(tag, deg) {
  tag.style.transform = `rotateZ(${deg}deg)`;
};

export function randomRotate(tag) {
  let hahahahahah = random.randomBool();

  if (hahahahahah) {
    rotate(tag, 90);
  } else if (!hahahahahah) {
    rotate(tag, -90);
  }
};
