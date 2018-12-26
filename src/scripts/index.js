import _ from 'lodash';
import $ from 'jquery';
import SplitText from './modules/split-text';
import { TweenLite, TimelineLite } from 'gsap';

import '../styles/style.scss';

// CACHE DOM
const $preloader = $('.preloader');
const $body = $('body');

function ready() {
  if ($preloader.length) {
    $preloader.fadeOut('fast', () => {
      $body.removeClass('loading');

      let splitenText = new SplitText('#dynamic-text');

      let animation = new TimelineLite();

      animation.staggerFrom(splitenText.chars, .8, {
        scale: 0,
        visibility: 'hidden'
      }, 0.03);

    });
  }
}

document.addEventListener('DOMContentLoaded', ready);
