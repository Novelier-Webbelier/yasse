import { Dazzle } from "./dazzle.js";
import * as Display from "../components/display.js";

export const images = [];

function appendImages() {
  for (let i = 0; i < 21; i++) {
    images.push({
      address: `https://raw.githubusercontent.com/Novelier/YASSE/main/img/components${i}.jpeg`,
    });
  }

  for (let i = 1; i < 3; i++) {
    images.push({
      address: `https://raw.githubusercontent.com/Novelier/YASSE/main/img/gif/components${i}.gif`,
    });
  }
};

appendImages();

export class Meme extends Dazzle {
  constructor(playTime, positionList, index, className) {
    // playTime = Number(ms);
    // positionList = [left, top];
    // index = Number;

    super();

    this.section = document.querySelector('.meme');

    this.image = [];
    this.imgTag = undefined;
    this.imgNum = 0;

    this.playTime = playTime;
    this.positionList = positionList;

    this.index = index;
    this.className = className;

    this.play();
  }

  play() {
    this.appendImageTag();
    setTimeout(() => {
      this.stop();
    }, this.playTime);
  };

  stop() {
    this.imgTag.remove();
  };

  appendImageTag() {
    this.imgTag = document.createElement('img');
    this.imgTag.src = images[this.index].address;

    this.imgTag.style.position = 'absolute';
    this.imgTag.style.left = `${this.positionList[0] - this.imgTag.width}px`;
    this.imgTag.style.top = `${this.positionList[1] - this.imgTag.width}px`;

    Display.display.add(this.imgTag, this.className);

    this.section.appendChild(this.imgTag);
  };
};
