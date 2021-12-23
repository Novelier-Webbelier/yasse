import * as Dazzle from "../class/dazzle.js";
import * as random from "../components/random-number.js";
import * as flip from "../components/flip.js";

export class YasseSpan extends Dazzle.Dazzle {
  constructor(infoList) {

    /*

    infoList = {
      content: 'YASSE!',
      font: {
        size: Number,
        weight: Number,
      },
      pos: {
        posType: bool,
        pos: [Number, Number],
      },
    };

    */

    super();

    this.infoList = infoList;
    
    this.section = document.querySelector('.yasse-span');

    this.spanTag = document.createElement('span');

    this.setVariable(infoList);
    this.append();
  }
  
  changeInfo(infoList) {
    this.spanTag.remove();
    this.setVariable(infoList);
    this.append();
  };

  setVariable(infoList) {
    this.content = infoList.content;
    
    this.fontSize = infoList.font.size;
    this.fontWeight = infoList.font.weight;
    
    // true - top:left / false - bottom:right;
    this.posType = infoList.pos.posType;
    this.pos = infoList.pos.pos;

    this.setSpans();
  };

  append() {
    this.setSpans();
    this.section.appendChild(this.spanTag);
  };

  setSpans() {
    this.spanTag.classList.add('yasse-span__span');

    this.spanTag.style.fontSize = this.fontSize;
    this.spanTag.style.fontWeight = this.fontWeight;
    this.spanTag.innerText = this.content;
    
    this.spanTag.style.position = 'absolute';

    if (this.posType) {
      this.spanTag.style.top = `${this.pos[0]}px`;
      this.spanTag.style.left = `${this.pos[1]}px`;
      this.spanTag.style.bottom = null;
      this.spanTag.style.right = null;
    } else if (!this.posType) {
      this.spanTag.style.top = null;
      this.spanTag.style.left = null;
      this.spanTag.style.bottom = `${this.pos[0]}px`;
      this.spanTag.style.right = `${this.pos[1]}px`;
    }

    this.spanTag.innerText = random.randomYasseSpan(50);
    flip.rotate(this.spanTag, random.randomNumberInRange(0, 350));
  };

  crazyPlay(repeatTime) {
    this.holololo = setInterval(() => {

      this.changeInfo({
        content: this.spanTag.innerText,
        font: {
          size: `${random.randomNumberInRange(10, 30)}vw`,
          weight: random.randomNumber(900),
        },
        pos: {
          posType: random.randomBool(),
          pos: [
            random.randomNumber(window.innerWidth),
            random.randomNumber(window.innerHeight),
          ],
        },
      });

    }, repeatTime);
  };

  changeCrazyPlayInfo(repeatTime) {
    this.stopCrazyPlay();
    this.crazyPlay(repeatTime);
  };

  stop() {
    this.spanTag.remove();
  };

  stopCrazyPlay() {
    clearInterval(this.holololo);
  };
};
