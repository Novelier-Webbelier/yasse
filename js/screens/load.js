import * as initSection from "../components/init-section.js";

const loadSection = document.querySelector('.loading');
const introSection = document.querySelector('.intro');

initSection.initAllSection();
initSection.showSection(loadSection);

window.onload = () => {
  setTimeout(() => {
    initSection.hideSection(loadSection);
    setTimeout(() => {
      initSection.showSection(introSection);
    }, 2000);
  }, 3000);
}
