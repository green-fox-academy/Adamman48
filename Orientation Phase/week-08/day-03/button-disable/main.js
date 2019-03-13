'use strict';
var signUp = document.querySelectorAll('input');
var baboon = document.querySelector('#baboon');
var cassuary = document.querySelector('#cassuary');
var chimpBtn = document.querySelector('#chimp-love-in');
signUp.forEach(function (value) { return value.addEventListener('click', function (event) {
    value === baboon || value === cassuary ?
        chimpBtn.setAttribute('disabled', 'false') :
        chimpBtn.setAttribute('disabled', 'true');
}); });
