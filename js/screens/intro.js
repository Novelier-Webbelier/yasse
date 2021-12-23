import * as initSection from "../components/init-section.js";
import * as checkMobile from "../components/check-mobile.js";

import { ChangeColor } from "../class/change-color.js";
import { Music } from "../class/music.js";

import { randomNumber } from "../components/random-number.js";

import { handleClickIntroBtn } from "../screens/intro-exp.js";
import { display } from "../components/display.js";

const introSection = document.querySelector('.intro');
const introSectionTitle = document.querySelector('.intro__title');
const introSectionBtn = document.querySelector('.intro__btn');
const expSection = document.querySelector('.intro-exp');

const dazzleInTitle = new ChangeColor(introSectionTitle, ['black', 'rgba(0, 0, 0, 0)'], randomNumber(70));
const dazzleInBtn = new ChangeColor(introSectionBtn, ['black', 'rgba(0, 0, 0, .15)'], randomNumber(90));

const music = new Music("https://github.com//Novelier/YASSE/blob/main/music/main-music.mp3?raw=true", true, 'BEAT!', 'START!');

if (!checkMobile.isMobile) {
  introSectionTitle.addEventListener('mouseenter', () => {
    dazzleInTitle.play();

    introSectionTitle.addEventListener('mouseleave', () => {
      dazzleInTitle.stop();
    });
  });

  introSectionBtn.addEventListener('mouseenter', () => {
    dazzleInBtn.play();
    
    introSectionBtn.addEventListener('mouseleave', () => {
      dazzleInBtn.stop();
    });
  })
};

introSectionBtn.addEventListener('click', () => {
  initSection.hideSection(introSection);
  setTimeout(() => {
    display.noneDisplay.remove(expSection);
  }, 1000);

  music.play();

  handleClickIntroBtn();
});
