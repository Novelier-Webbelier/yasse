export const NONE_DISPLAY_KEY = 'none-display';

export const display = {
  init: (tag) => {
    for (let i = 0; i < tag.classList.length; i++) {
      const element = tag.classList[i];
      tag.classList.remove(element);
    }
  },
  add: (tag, className) => {
    tag.classList.add(className);
  },
  remove: (tag, className) => {
    tag.classList.remove(className);
  },
  noneDisplay: {
    add: (tag) => {
      display.add(tag, NONE_DISPLAY_KEY);
    },
    remove: (tag) => {
      display.remove(tag, NONE_DISPLAY_KEY);
    },
  },
};
