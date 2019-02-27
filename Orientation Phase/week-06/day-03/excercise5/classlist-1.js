'use strict';
var paragraphList = document.querySelectorAll('p');
/* If the fourth p has a 'dolphin' class, replace apple's content with 'pear' */
paragraphList[3].classList.contains('dolphin') ?
    paragraphList.forEach(function (value) {
        return value.classList.contains('apple') ? value.textContent = 'pear' : null;
    }) :
    null;
/* If the first p has an 'apple' class, replace cat's content with 'dog' */
paragraphList[0].classList.contains('apple') ?
    paragraphList.forEach(function (value) {
        return value.classList.contains('cat') ? value.textContent = 'dog' : null;
    }) :
    null;
/* Make apple red by adding a .red class */
paragraphList.forEach(function (value) {
    return value.classList.contains('apple') ? value.classList.add('red') : null;
});
/* Make balloon less balloon-like (change its shape) */
paragraphList.forEach(function (value) {
    return value.classList.contains('balloon') ? value.setAttribute('style', 'border-radius: 0%') : null;
});
