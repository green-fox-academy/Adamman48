'use strict';

const signUpActive: HTMLElement = document.querySelector('.choose-animal');
const chimpLove: HTMLElement = document.querySelector('.sign-up')
const chimpUp: NodeList = chimpLove.querySelectorAll('input');
const signUp: NodeList = signUpActive.querySelectorAll('input');
const baboon: HTMLElement = document.querySelector('#baboon');
const cassuary: HTMLElement = document.querySelector('#cassuary');
const signMeUpScotty: HTMLElement = document.querySelector('#yes');
const chimpBtn: HTMLButtonElement = document.querySelector('#chimp-love-in');
const signBtn: HTMLButtonElement = document.querySelector('#sign-up-submit');

signUp.forEach(value => value.addEventListener('click', (event) => {
  value === baboon || value === cassuary ?
    signBtn.removeAttribute('disabled') :
    signBtn.setAttribute('disabled', 'true');
}));

chimpUp.forEach(value => value.addEventListener('click', (event) => {
  value === signMeUpScotty ?
    chimpBtn.removeAttribute('disabled') :
    chimpBtn.setAttribute('disabled', 'true');
}));