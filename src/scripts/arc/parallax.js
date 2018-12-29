import $ from 'jquery';

export default class Parallax {

  constructor() {
    this.scrollTop = 0;
    this.$block = $('.title-image');
    this.$block1 = this.$block.find('.name');
    this.$block2 = this.$block.find('.first');
    this.$block3 = this.$block.find('.second');
    this.scrollLoop();

    const self = this;

    $(window).on('scroll', () => {
      self.scrollTop = $(window).scrollTop();
    });
  }


  scrollLoop() {
    this.scrollTop = $(window).scrollTop();

    this.setTranslate(0, this.scrollTop, -0.015, this.$block1);
    this.setTranslate(0, this.scrollTop, -0.030, this.$block2);
    this.setTranslate(0, this.scrollTop, -0.045, this.$block3);

    requestAnimationFrame(this.scrollLoop.bind(this));
  }

  setTranslate(xPos, yPos, factor, $el) {
    $el.css({
      'transform': `translate3d(${xPos}px, ${yPos * 4 * factor}px, 0)`,
    });
  }

}
