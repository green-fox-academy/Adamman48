'use strict';

/* 1) replace the list items' content with items from this list:
['apple', 'banana', 'cat', 'dog'] */

let listItems: NodeList = document.querySelectorAll('li');
let replaceItems: string[] = ['apple', 'banana', 'cat', 'dog'];

listItems.forEach((value, index) => {value.textContent = replaceItems[index]});

/* 2) change the <ul> element's background color to 'limegreen'
- use css class to change the color instead of the style property */

let listParent: any = document.querySelector('ul');

listParent.setAttribute('style', 'background-color: limegreen');