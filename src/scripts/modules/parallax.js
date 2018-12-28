import $ from 'jquery';
import { easeInOutQuad } from '../helpers/easing';

export default class Parallax {

  constructor() {
    this.PROPERTIES =               ['translateX', 'translateY', 'opacity', 'rotate', 'scale'];
    this.$window =                  $(window);
    this.$body =                    $('body');

    this.bodyHeight =               0;
    this.currentKeyframe =          0;
    this.currentWrapper =           null;
    this.prevKeyframesDurations =   0;
    this.relativeScrollTop =        0;
    this.scrollTimeoutID =          0;
    this.scrollTop =                0;
    this.windowHeight =             0;
    this.windowWidth =              0;
    this.wrappers =                 [];

    this.keyframes = {
      'wrapper' : '.title-image',
      'duration' : '100%',
      'animations' :  [
        {
          'selector'    : '.name',
          'translateY'  : -140,
          'opacity'     : 0
        } , {
          'selector'    : '.first',
          'translateY'  : -110,
          'opacity'     : 0
        } , {
          'selector'    : '.second',
          'opacity'     : [1, 0]
        }
      ]
    }

    this.scrollIntervalID = setInterval( this.updatePage.bind(this), 10 );
    this.setupValues();
  }

  updatePage() {
    let self = this;
    requestAnimationFrame(function animate() {
      self.setScrollTops();
      if ( self.scrollTop > 0 && self.scrollTop <= (self.bodyHeight - self.windowHeight) ) {
        self.animateElements();
        self.setKeyframe();
      }
    });
  }

  setScrollTops() {
    this.scrollTop = this.$window.scrollTop();
    this.relativeScrollTop = this.scrollTop - this.prevKeyframesDurations;
  }

  setKeyframe() {

  }

  animateElements() {
    let animation, translateY, translateX, scale, rotate, opacity;
    for ( let i = 0; i < this.keyframes[ this.currentKeyframe ].animations.length; i++) {
      animation   = this.keyframes[currentKeyframe].animations[i];
      translateY  = calcPropValue(animation, 'translateY');
      translateX  = calcPropValue(animation, 'translateX');
      scale       = calcPropValue(animation, 'scale');
      rotate      = calcPropValue(animation, 'rotate');
      opacity     = calcPropValue(animation, 'opacity');

      $(animation.selector).css({
        'transform': `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
        'opacity' : opacity
      })
    }
  }

  calcPropValue(animation, property) {
    var value = animation[property];
    if(value) {
      value = easeInOutQuad(relativeScrollTop, value[0], (value[1]-value[0]), keyframes[currentKeyframe].duration);
    } else {
      value = getDefaultPropertyValue(property);
    }
    // value = +value.toFixed(2)
    // TEMPORARILY REMOVED CAUSE SCALE DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE THIS
    return value;
  }

  setupValues() {
    this.scrollTop    = this.$window.scrollTop();
    this.windowHeight = this.$window.height();
    this.windowWidth  = this.$window.width();
    this.convertAllPropsToPx();
    this.buildPage();
  }

  convertAllPropsToPx() {

  }

  buildPage() {

  }

}
