import $ from 'jquery';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default class indexParallax {

  constructor() {
    this.wrapper = $('.title-image-text');
    if (this.wrapper.length) {

      // let controller = new ScrollMagic.Controller({ addIndicators: true });
      let controller = new ScrollMagic.Controller();

      let allTitle = new ScrollMagic.Scene({
        triggerElement: '.title-image-text',
        triggerHook: 0.2,
        duration: 100
      })
      .setTween('.title-image-text', 0.5, { y: 40 })
      // .addIndicators({ title: "2"})
      .addTo(controller);

    }
  }

}
