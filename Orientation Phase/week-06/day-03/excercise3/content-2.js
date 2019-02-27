'use strict';
/* 1) replace the list items' content with items from this list:
['apple', 'banana', 'cat', 'dog'] */
var listItems = document.querySelectorAll('li');
var replaceItems = ['apple', 'banana', 'cat', 'dog'];
listItems.forEach(function (value, index) { value.textContent = replaceItems[index]; });
/* 2) change the <ul> element's background color to 'limegreen'
- use css class to change the color instead of the style property */
var listParent = document.querySelector('ul');
listParent.setAttribute('style', 'background-color: limegreen');
