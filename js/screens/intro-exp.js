import * as music from "../class/music.js";
import { display } from "../components/display.js";

const expSection = document.querySelector('.intro-exp');
const expSpan = document.querySelector('.intro-exp__text');
const mainSection = document.querySelector('.main');

const contents = [
  "혹시",
  "YASSE",
  "라는",
  "말을",
  "들어보신 적",
  "있으신가요?",
  "저는",
  "이 YASSE",
  "라는 단어를",
  "퍼뜨리기 위해",
  "이 웹사이트를",
  "개발",
  "했습니다",
  "했습니다",
  "YASSE 는",
  "기분이",
  "좋거나",
  "좋은 일이",
  "생길 때",
  "많이",
  "쓰는 데요",
  "꼭",
  "이 YASSE",
  "라는 단어를",
  "기억해",
  "주시기",
  "바래요",
  "지금부터",
  "나올",
  "눈뽕과 함께!",
];

expSpan.innerText = 'I am Novelier who made this Web Site';

export function handleClickIntroBtn() {
  let count = 0;
  setTimeout(() => {

    const exp = setInterval(() => {

      if (count === contents.length) {
        expSection.remove();
        display.noneDisplay.remove(mainSection);
        clearInterval(exp);
      }

      expSpan.innerText = contents[count];
      count++;

    }, music.musicInfo.beatTime);

  }, music.musicInfo.delayTime);
}
