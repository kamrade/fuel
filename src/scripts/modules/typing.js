import { TimelineLite } from 'gsap';
import SplitText from '../helpers/split-text';

export default class Typing {
  constructor(el) {
    this.splitenText = new SplitText(el);
    this.animation = new TimelineLite();
  }

  typeIn() {
    this.animation.staggerFrom(this.splitenText.chars, .8, {
      scale: 0,
      visibility: 'hidden'
    }, 0.03);
  }

}
