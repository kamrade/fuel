import $ from 'jquery';
import { easeInOutQuad } from '../helpers/easing';
import { getDefaultPropertyValue } from '../helpers/default-properties';
import { convertPercentToPx } from '../helpers/convert-percent-to-px';
import keyframes from './parallax/keyframes';

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


    this.scrollIntervalID = setInterval( this.updatePage.bind(this), 10 );
    this.setupValues();
  }

  updatePage() {
    let self = this;
    requestAnimationFrame(function animate() {
      self.setScrollTops();
      // console.log(
      //   self.scrollTop > 0 && self.scrollTop,
      //   self.bodyHeight - self.windowHeight
      // );
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
    if (this.scrollTop > (keyframes[this.currentKeyframe].duration + this.prevKeyframesDurations)) {
      this.prevKeyframesDurations += keyframes[this.currentKeyframe].duration;
      this.currentKeyframe++;
      this.showCurrentWrappers();
    } else if (this.scrollTop < this.prevKeyframesDurations) {
        this.currentKeyframe--;
        this.prevKeyframesDurations -= keyframes[this.currentKeyframe].duration;
        this.showCurrentWrappers();
    }
  }

  showCurrentWrappers() {
    let i;
    if (keyframes[this.currentKeyframe].wrapper != this.currentWrapper) {
      $(this.currentWrapper).hide();
      $(keyframes[this.currentKeyframe].wrapper).show();
      this.currentWrapper = keyframes[this.currentKeyframe].wrapper;
    }
  }

  animateElements() {
    let animation, translateY, translateX, scale, rotate, opacity;
    for ( let i = 0; i < keyframes[ this.currentKeyframe ].animations.length; i++) {
      animation   = keyframes[currentKeyframe].animations[i];
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
    let value = animation[property];
    if (value) {
      value = easeInOutQuad(this.relativeScrollTop, value[0], (value[1]-value[0]), keyframes[this.currentKeyframe].duration);
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
    var i, j, k, value;
    for ( i = 0; i < keyframes.length; i++ ) { // loop keyframes
      keyframes[i].duration = convertPercentToPx(keyframes[i].duration, 'y', this.windowHeight);
      for (j = 0; j < keyframes[i].animations.length; j++) { // loop animations
        Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
          value = keyframes[i].animations[j][key];
          if ( key !== 'selector' ) {
            if( value instanceof Array ) { // if its an array
              for ( k = 0; k < value.length; k++ ) { // if value in array is %
                if (typeof value[k] === "string") {
                  if(key === 'translateY') {
                    value[k] = convertPercentToPx(value[k], 'y', this.windowHeight);
                  } else {
                    value[k] = convertPercentToPx(value[k], 'x', this.windowHeight);
                  }
                }
              }
            } else {
              if (typeof value === "string") { // if single value is a %
                if (key === 'translateY') {
                  value = convertPercentToPx(value, 'y', this.windowHeight);
                } else {
                  value = convertPercentToPx(value, 'x', this.windowHeight);
                }
              }
            }
            keyframes[i].animations[j][key] = value;
          }
        });
      }
    }
  }

  buildPage() {

    var i, j, k, value;
    for (i = 0; i < keyframes.length; i++) { // loop keyframes
      this.bodyHeight += keyframes[i].duration;
      if ($.inArray( keyframes[i].wrapper, this.wrappers) == -1) {
        this.wrappers.push( keyframes[i].wrapper );
      }
      for (j = 0; j < keyframes[i].animations.length; j++) { // loop animations
        Object.keys( keyframes[i].animations[j]).forEach(function(key) { // loop properties
          value = keyframes[i].animations[j][key];
          if(key !== 'selector' && value instanceof Array === false) {
            var valueSet = [];
            valueSet.push(getDefaultPropertyValue(key), value);
            value = valueSet;
          }
          keyframes[i].animations[j][key] = value;
        });
      }
    }

    this.$body.height(this.bodyHeight);
    this.$window.scroll(0);
    this.currentWrapper = this.wrappers[0];
    $(this.currentWrapper).show();
  }

}
