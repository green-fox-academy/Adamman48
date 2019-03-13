'use strict';

const signUp: NodeList = document.querySelectorAll('input');
const baboon: HTMLElement = document.querySelector('#baboon');
const cassuary: HTMLElement = document.querySelector('#cassuary');
const chimpBtn: HTMLButtonElement = document.querySelector('#chimp-love-in');

signUp.forEach(value => value.addEventListener('click', (event) => {
  value === baboon || value === cassuary ?
    chimpBtn.setAttribute('disabled', 'false') :
    chimpBtn.setAttribute('disabled', 'true');
}));