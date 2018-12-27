import $ from 'jquery';

export default class ScrollControl {

  constructor(el, start, end) {
    this.$el = $(el);
    this.start = start;
    this.end = end;

    console.log(this.$el.get(0).getBoundingClientRect().y);

    $(window).on('scroll', () => {
      this.scrollTop = $(window).scrollTop();
      this.parallax();
    });

  }

  parallax() {

    if (this.scrollTop > this.start && this.scrollTop < this.end) {

      this.$el.css({
        'transform': `matrix(1, 0, 0, 1, 0, ${ (this.scrollTop/4).toFixed(0) } )`
      });

    } else {

    }


  }
}
