import $ from 'jquery';

export default class Preloader {

  constructor() {
    this.$preloader = $('.preloader');
    this.$body = $('body');
  }

  hidePreloader(func) {
    if (this.$preloader.length) {
      this.$preloader.fadeOut('fast', () => {
        this.$body.removeClass('loading');
        if (func) { func() }
      });
    }
  }

  showPreloader(func) {
    if (this.$preloader.length) {
      this.$preloader.fadeIn('fast', () => {
        this.$body.addClass('loading');
        if (func) { func() }
      });
    }
  }

}
