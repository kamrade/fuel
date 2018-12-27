import $ from 'jquery';

export default class ScrollControl {

  constructor(el, start, offset) {
    this.$el = $(el);
    this.start = start;
    this.offset = offset;

    console.log(this.$el.get(0).getBoundingClientRect().y);

    $(window).on('scroll', () => {
      this.scrollTop = $(window).scrollTop();
      this.parallax();
    });

  }

  parallax() {
    if (this.scrollTop > this.start) {
      this.$el.css('transform', `matrix(1, 0, 0, 1, 0, ${this.offset})`);
    } else {
      this.$el.css('transform', `matrix(1, 0, 0, 1, 0, 0)`);
    }
  }

  


}
