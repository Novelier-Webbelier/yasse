import * as display from "../components/display.js";
import * as checkMobile from "../components/check-mobile.js";

export class Mouse {
  constructor(innerColor, borderColor, size) {

    this.mouse = undefined;
    this.innerColor = innerColor;
    this.borderColor = borderColor;
    this.size = size;

    this.init();
    this.add();
    this.checkEvent();
  }

  draw(newInnerColor, newBorderColor, newPos, newSize) {
    this.mouse.style.backgroundColor = newInnerColor;
    this.mouse.style.border = newBorderColor;

    this.mouse.style.left = newPos[0];
    this.mouse.style.top = newPos[1];

    this.mouse.style.width = newSize[0];
    this.mouse.style.height = newSize[1];
  };

  add() {
    document.body.appendChild(this.mouse);
  };

  init() {
    this.mouse = document.createElement('div');
    display.display.add(this.mouse, 'mouse');

    this.mouse.style.position = 'absolute';

    this.mouse.style.backgroundColor = this.innerColor;
    this.mouse.style.border = this.borderColor;
    this.mouse.style.borderRadius = '50%';

    this.mouse.style.width = `${this.size[0]}px`;
    this.mouse.style.height = `${this.size[1]}px`;

    this.mouse.style.left = window.innerWidth / 2;
    this.mouse.style.top = window.innerHeight / 2;
  };

  checkEvent() {
    window.addEventListener('mousemove', (event) => {
      const pointX = event.clientX;
      const pointY = event.clientY;

      this.mouse.style.left = `${pointX}px`;
      this.mouse.style.top = `${pointY}px`;

      this.draw(this.innerColor, this.borderColor, [pointX, pointY], [this.size[0], this.size[1]]);
    });
  };
}

if (!checkMobile.isMobile) {
  const mouse = new Mouse('rgba(0, 0, 0, .2)', '1px solid rgba(0, 0, 0, .3)', [15, 15]);
}
