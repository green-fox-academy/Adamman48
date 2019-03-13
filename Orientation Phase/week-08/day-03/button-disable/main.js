'use strict';
var signUpActive = document.querySelector('.choose-animal');
var chimpLove = document.querySelector('.sign-up');
var chimpUp = chimpLove.querySelectorAll('input');
var signUp = signUpActive.querySelectorAll('input');
var baboon = document.querySelector('#baboon');
var cassuary = document.querySelector('#cassuary');
var signMeUpScotty = document.querySelector('#yes');
var chimpBtn = document.querySelector('#chimp-love-in');
var signBtn = document.querySelector('#sign-up-submit');
signUp.forEach(function (value) { return value.addEventListener('click', function (event) {
    value === baboon || value === cassuary ?
        signBtn.removeAttribute('disabled') :
        signBtn.setAttribute('disabled', 'true');
}); });
chimpUp.forEach(function (value) { return value.addEventListener('click', function (event) {
    value === signMeUpScotty ?
        chimpBtn.removeAttribute('disabled') :
        chimpBtn.setAttribute('disabled', 'true');
}); });
