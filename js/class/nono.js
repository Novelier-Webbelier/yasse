import { randomNumberInRange } from "../components/random-number.js";

export class Nono {
  constructor() {
    this.clickNum = 0;
    this.nonoSection = undefined;
    this.totalNonoSpan = [];
    this.size = [window.innerWidth, window.innerHeight];

    this.setNonoSection();
    this.play();
  };

  setNonoSection() {
    this.nonoSection = document.createElement('div');

    this.nonoSection.classList.add('nono');

    document.body.appendChild(this.nonoSection);
  };

  setNonoSpan() {
    this.lastNonoSpan = document.createElement('span');

    this.lastNonoSpan.classList.add('nono__span');

    this.lastNonoSpan.style.position = 'absolute';
    this.lastNonoSpan.style.left = `${Math.floor(Math.random() * this.size[0]) - 100}px`;
    this.lastNonoSpan.style.top = `${Math.floor(Math.random() * this.size[1]) - 40}px`;

    this.lastNonoSpan.innerText = `응 안돼 x(${this.clickNum})`;

    this.nonoSection.appendChild(this.lastNonoSpan);

    this.totalNonoSpan.unshift(this.lastNonoSpan);

    for (let i = 0; i < this.totalNonoSpan.length; i++) {
      const element = this.totalNonoSpan[i];
      this.remove(element);
    }
  };

  remove(tag) {
    setTimeout(() => {
      tag.remove();
    }, randomNumberInRange(2000, 4000));
  }

  click() {
    this.clickNum++;
    this.setNonoSpan();
  };

  resize() {
    this.size = [window.innerWidth, window.innerHeight];
  };

  play() {
    window.addEventListener('click', () => {
      this.click();
    });
    
    window.addEventListener('resize', () => {
      this.resize();
    });
  };
};

const nono = new Nono();
