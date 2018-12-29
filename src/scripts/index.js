import Preloader from './modules/preloader';
import Typing from './modules/typing';
import test from './modules/test';
import indexParallax from './modules/index.parallax';

import '../styles/style.scss';

const preloader = new Preloader();
const typing    = new Typing('#dynamic-text');
test();

function ready() {
  preloader.hidePreloader();
  typing.typeIn();
  new indexParallax();
}

document.addEventListener('DOMContentLoaded', ready);
