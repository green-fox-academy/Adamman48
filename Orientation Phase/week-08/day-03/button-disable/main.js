'use strict';
var chimpLove = document.querySelector('.choose-animal');
var signUp = chimpLove.querySelectorAll('input');
var baboon = document.querySelector('#baboon');
var cassuary = document.querySelector('#cassuary');
var chimpBtn = document.querySelector('#chimp-love-in');
signUp.forEach(function (value) { return value.addEventListener('click', function (event) {
    value === baboon || value === cassuary ?
        chimpBtn.removeAttribute('disabled') :
        chimpBtn.setAttribute('disabled', 'true');
}); });
