import { Dazzle } from "./dazzle.js";
import { randomColor } from "../components/return-color.js";

export class ChangeColor extends Dazzle {
  constructor (section, initColorList, repeatCycleTime) {

    super();

    this.section = section;
    this.initColorList = initColorList;
    this.repeatCycleTime = repeatCycleTime;
  }

  play() {
    this.changeColorDazzle = setInterval(() => {
      this.section.style.color = randomColor();
      this.section.style.backgroundColor = randomColor();
    }, this.repeatCycleTime);
  };

  stop() {
    clearInterval(this.changeColorDazzle);

    this.section.style.color = this.initColorList[0];
    this.section.style.backgroundColor = this.initColorList[1];
  };

  changeInfo(section, initColorList, repeatCycleTime) {
    this.stop();
    
    this.section = section;
    this.initColorList = initColorList;
    this.repeatCycleTime = repeatCycleTime;

    this.play();
  };
};
