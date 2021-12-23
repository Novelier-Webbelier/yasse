import { display } from "../components/display.js";

const allSection = document.querySelectorAll('section');
const main = document.querySelector('.main');
const mouse = document.querySelector('.mouse');

export const NONE_DISPLAY_KEY = 'none-display';
export const DISAPPEAR_KEY = 'disappear';
export const APPEAR_KEY = 'appear';

export function initAllSection() {
  for (let i = 0; i < allSection.length; i++) {
    const element = allSection[i];
    display.add(element, NONE_DISPLAY_KEY);
  }
}

export function showSection(section) {
  initAllSection();

  display.noneDisplay.remove(section);
  display.remove(section, DISAPPEAR_KEY);
  display.add(section, APPEAR_KEY);
}

export function hideSection(section) {
  display.remove(section, APPEAR_KEY);
  display.add(section, DISAPPEAR_KEY);

  setTimeout(() => {
    section.remove();
  }, 1000);
}

initAllSection();
display.noneDisplay.add(main);
