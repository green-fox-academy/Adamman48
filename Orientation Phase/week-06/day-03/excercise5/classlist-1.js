'use strict';
/* If the fourth p has a 'dolphin' class, replace apple's content with 'pear' */
var paragraphList = document.querySelectorAll('p');
paragraphList[3].classList.contains('dolphin') ? paragraphList.forEach(function (value) { return value.classList.contains('apple') ? value.textContent = 'pear' : null; }) : null;
