'use strict';

const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/apibooks');
http.onload = () => {
  const data = JSON.parse(http.responseText);
  console.log(data)
  loadBookNamesList(data);


};
http.send();

const loadBookNamesList = (inputData) => {
  const listHere: Node = document.querySelector('ul');
  inputData.forEach(value =>
    listHere.appendChild(document.createElement('li'))
      .textContent = `${value.book_name}`);
  }