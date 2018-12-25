import _ from 'lodash';
import $ from 'jquery';
import '../styles/style.scss';

console.log(':: start');

let $preloader = $('.preloader');

function ready() {
  setTimeout(() => {
    $preloader.css('display', 'none');
  }, 5000);
}

document.addEventListener('DOMContentLoaded', ready);
