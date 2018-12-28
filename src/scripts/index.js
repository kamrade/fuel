import Preloader from './modules/preloader';
import Typing from './modules/typing';
import test from './modules/test';
import Parallax from './modules/parallax';

import '../styles/style.scss';

const preloader = new Preloader();
const typing    = new Typing('#dynamic-text');
test();
new Parallax();

function ready() {
  preloader.hidePreloader();
  typing.typeIn();
}

document.addEventListener('DOMContentLoaded', ready);
