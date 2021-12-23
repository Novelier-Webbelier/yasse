import * as changeColorClass from "./change-color.js";
import * as memeClass from "./meme.js";
import * as yasseSpansClass from "./yasse-span.js";
import { musicInfo } from "./music.js";
import { percent, randomNumber, randomNumberInRange, randomYasseSpan } from "../components/random-number.js";

export class Rounds {
  constructor() {

    this.title = document.querySelector('title');

    this.main = document.querySelector('.main');
    this.section = document.querySelector('.progress-span');
    this.startBtn = document.querySelector('.intro__btn');

    this.currentRounds = 0;

    this.roundsInfo = {
      showingTime: musicInfo.beatTime * 4,
      roundsTime: musicInfo.totalTime,
      changingTime: {
        changingTime: null,
        min: 1,
        max: 100,
      },
      maxMemeNum: 10,
    };

    this.changeColor = new changeColorClass.ChangeColor(this.main, ['white', 'black'], this.roundsInfo.changingTime.changingTime);

    this.yasseSpanClassList = [];
    this.memeClassList = [];
    this.memeNum = 0;

    this.startBtn.addEventListener('click', () => this.checkLevel());
  }

  checkLevel() {

    setTimeout(() => {
      this.changeColor.play();
      this.setCurrentRounds();
      this.handleMeme();
    }, musicInfo.totalIntroTime);
    
    setInterval(() => {
      this.setCurrentRounds();
    }, this.roundsInfo.roundsTime);
  }
  
  setCurrentRounds() {
    this.currentRounds++;
    
    this.title.innerText = `YASSE - ${this.currentRounds} R`;
    
    if (this.currentRounds <= 10) {
      this.roundsInfo.changingTime.changingTime = 110 - (this.currentRounds * 10);
    } else if (this.currentRounds > 10) {
      if (this.currentRounds === 11) {
        this.roundsInfo.changingTime.changingTime = 5;          
      } else if (this.currentRounds === 12) {
        this.roundsInfo.changingTime.changingTime = 3;
      } else if (this.currentRounds === 13) {
        this.roundsInfo.changingTime.changingTime = 1;
      } else {
        this.roundsInfo.changingTime.changingTime = .1;
      }
    }
    
    this.changeColor.changeInfo(this.main, ['white', 'black'], this.roundsInfo.changingTime.changingTime);
    
    this.addYasse();
    this.addYasse();
    
    this.nextLevel();
  };

  nextLevel() {
    this.changeColor.stop();
    this.main.style.backgroundColor = 'black';
    this.section.style.color = 'white';
    this.section.innerText = `ROUND ${this.currentRounds}`;
    
    for (let i = 0; i < document.querySelectorAll('.main span').length; i++) {
      const element = document.querySelectorAll('.main span')[i];
      element.style.color = 'black';
    }
    
    let deleteImg = setInterval(() => {
      for (let i = 0; i < document.querySelectorAll('.main img').length; i++) {
        const element = document.querySelectorAll('.main img')[i];
        element.remove();
      }
      this.section.style.color = 'white';
    }, 1);

    setTimeout(() => {
      this.changeColor.play();

      for (let i = 0; i < document.querySelectorAll('.main span').length; i++) {
        const element = document.querySelectorAll('.main span')[i];
        element.style.color = '';
      }

      this.main.style.backgroundColor = 'white';

      this.section.innerText = null;
      clearInterval(deleteImg);

    }, this.roundsInfo.showingTime);
  };

  addYasse() {
    this.yasseSpanClassList.push(
      new yasseSpansClass.YasseSpan({
        content: randomYasseSpan(80),
        font: {
          size: '20vw',
          weight: 200,
        },
        pos: {
          posType: true,
          pos: [100, 100],
        },
      })
    );

    this.playYasse();
  };

  playYasse() {
    for (let i = 0; i < this.yasseSpanClassList.length; i++) {
      this.yasseSpanClassList[i].changeCrazyPlayInfo(this.roundsInfo.changingTime.changingTime);
    }
  };

  handleMeme() {
    setInterval(() => {
      for (let i = 0; i < Math.floor(randomNumberInRange(1, 4)); i++) {
        if (percent(20)) {
          this.addMeme(300);
        } else {
          this.addMeme(musicInfo.beatTime * Math.floor(randomNumberInRange(2, 4)));
        }
      }
    }, musicInfo.beatTime);
  }

  addMeme(playTime) {
    this.memeNum += 1;

    new memeClass.Meme(
      playTime,
      [
        randomNumber(window.innerWidth),
        randomNumber(window.innerHeight)
      ],
      Math.floor(randomNumber(22)),
      this.memeNum,
    )
  };
};

const rounds = new Rounds();
