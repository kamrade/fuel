import Preloader from './modules/preloader';
import Typing from './modules/typing';
import ScrollControl from './modules/scroll';

import '../styles/style.scss';

const preloader = new Preloader();
const typing    = new Typing('#dynamic-text');
new ScrollControl('.title-image', 0, 40);

function ready() {
  preloader.hidePreloader();
  typing.typeIn();
}

document.addEventListener('DOMContentLoaded', ready);
