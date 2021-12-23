export const musicInfo = {
  totalTime: 193000,
  totalIntroTime: (500 * 31) + 400,
  beatTime: 500,
  delayTime: 400,
};

export class Music {
  constructor(src, loopBool, beatMent, startMent) {
    this.music = new Audio(src);
    this.beatMent = beatMent;
    this.startMent = startMent;
    this.setting = {
      src: src,
      loop: loopBool,
      muted: false,
    };

    this.checkLoop();
  }

  checkLoop() {
    if (this.setting.loop) {
      this.music.loop = true;
    } else if (!this.setting.loop) {
      this.music.loop = false;
    }
  }

  play() {
    this.music.play();
  }
}
