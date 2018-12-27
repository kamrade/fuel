import Preloader from './modules/preloader';
import Typing from './modules/typing';
import ScrollControl from './modules/scroll';
import test from './modules/test';

import '../styles/style.scss';

const preloader = new Preloader();
const typing    = new Typing('#dynamic-text');
new ScrollControl('.title-image', 0, 150);
test();

function ready() {
  preloader.hidePreloader();
  typing.typeIn();
}

document.addEventListener('DOMContentLoaded', ready);
