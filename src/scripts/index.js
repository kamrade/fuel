import _ from 'lodash';
import '../styles/style.scss';
import helloComponent from './components/hello';
import formComponent from './components/form';
const navBarElem = document.querySelector('.navbar');

let state = {
  complete: true,
  firstName: '',
  starWars: {}
}

// document.addEventListener('DOMContentLoaded', () => {
//   fetch('https://swapi.co/api/planets/1/')
//   .then(res => res.json())
//   .then((data) => state.starWars = data)
//   .then(() => navBarElem.insertAdjacentHTML('afterbegin', `<h3 data-testid="starWars">${state.starWars.url ? 'Recived StarWars data!' : 'Doesnt work'}</h3>`))
// })

function onSubmit() {
  const button = document.getElementById('login-button');
  const userData = {
    firstName: '',
    lastName: '',
    email: ''
  };

  const setUserData = function() {
    userData.firstName = document.getElementById('firstName').value;
    userData.lastName = document.getElementById('lastName').value;
    userData.email = document.getElementById('email').value;
  };

  const setCookie = function () {
    document.cookie = `firstName=${userData.firstName}`
  }

  const displayNewPanel = function() {
    const panelView = `
    <div data-testid="success" class="success">
      <p data-testid="success-firstName">First name: ${userData.firstName}</p>
      <p data-testid="success-lastName">Last name: ${userData.lastName}</p>
      <p data-testid="success-email">Email: ${userData.email}</p>
    </div>`;
    navBarElem.insertAdjacentHTML('afterbegin', panelView);
  };

  button.addEventListener('click', () => {
    // CONDITION WHEN JWT TOKEN IS REQUIRED TO SUBMIT THE FORM
    // if (document.cookie.includes('JWT')) {
      setUserData();
      setCookie()
      displayNewPanel();
    // }
  });
}

document.body.appendChild( helloComponent() );
navBarElem.insertAdjacentHTML('afterend', formComponent());
onSubmit();
