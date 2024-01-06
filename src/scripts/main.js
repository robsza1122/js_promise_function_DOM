'use strict';

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

function waitFor(element, eventName) {
  return new Promise(function(resolve, reject) {
    button.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`);
    });
  });
};

const printMessage = (message) => {
  const formElement = document.querySelector('form');

  formElement.insertAdjacentHTML('beforeend', `<div>${message}</div>`);
};

waitFor(loginField, 'click').then(printMessage);

waitFor(passwordField, 'click').then(printMessage);

waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input')
  .then(printMessage);

waitFor(passwordField, 'input')
  .then(printMessage);

waitFor(loginField, 'blur').then(printMessage, loginField
  .addEventListener('click', () => {
    printMessage('You clicked in loginField!!!');
  }));

waitFor(passwordField, 'blur').then(printMessage, passwordField
  .addEventListener('click', () => {
    printMessage('You clicked in passwordField!!!');
  }));

waitFor(button, 'blur').then(printMessage, button
  .addEventListener('click', () => {
    printMessage('You clicked in button!!!');
  }));
