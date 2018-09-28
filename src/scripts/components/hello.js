import stockImage from '../../images/stock.jpg';
import printMe from '../modules/print.js';
import { cube } from '../modules/math';

export default function helloComponent() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ');
  element.classList.add('hello');
  element.classList.add('hello--test');

  // Tree Shaking
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(2)
  ].join('\n\n');

  // Add the image to our existing div.
  const myImg = new Image();
  myImg.src = stockImage;
  element.appendChild(myImg);

  // Output management
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;

}
