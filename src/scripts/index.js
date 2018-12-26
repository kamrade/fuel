import _ from 'lodash';
import $ from 'jquery';
import '../styles/style.scss';

console.log(':: start');

let $preloader = $('.preloader');
const $body = $('body');
function ready() {
  setTimeout(() => {
    $body.removeClass('loading');
    if ($preloader.length) {
      $preloader.css('display', 'none');
    }
  }, 2000);
}

document.addEventListener('DOMContentLoaded', ready);
