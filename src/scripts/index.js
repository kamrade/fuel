import Preloader from './modules/preloader';
import Typing from './modules/typing';
import test from './modules/test';
import scrollMagic from './modules/scroll-magic';

import '../styles/style.scss';

const preloader = new Preloader();
const typing    = new Typing('#dynamic-text');
test();
scrollMagic();

function ready() {
  preloader.hidePreloader();
  typing.typeIn();
}

document.addEventListener('DOMContentLoaded', ready);
