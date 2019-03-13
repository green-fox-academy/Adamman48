'use strict';

const chimpLove: HTMLElement = document.querySelector('.choose-animal');
const signUp: any = chimpLove.querySelectorAll('input');
const baboon: HTMLElement = document.querySelector('#baboon');
const cassuary: HTMLElement = document.querySelector('#cassuary');
const chimpBtn: HTMLButtonElement = document.querySelector('#chimp-love-in');

signUp.forEach(value => value.addEventListener('click', (event) => {
  value === baboon || value === cassuary ?
    chimpBtn.removeAttribute('disabled') :
    chimpBtn.setAttribute('disabled', 'true');
}));