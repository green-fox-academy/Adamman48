'use strict';

/* If the fourth p has a 'dolphin' class, replace apple's content with 'pear' */

let paragraphList: any = document.querySelectorAll('p');

paragraphList[3].classList.contains('dolphin') ? 
  paragraphList.forEach(value => 
    value.classList.contains('apple') ? value.textContent = 'pear' : null) : 
      null;

/* If the first p has an 'apple' class, replace cat's content with 'dog' */



/* Make apple red by adding a .red class */



/* Make balloon less balloon-like (change its shape) */