'use strict';

const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/booknames');
http.onload = () => {
  const data = JSON.parse(http.responseText);
  loadBookNamesList(data);
};
http.send();

const loadBookNamesList = (inputData) => {
  const listHere: Node = document.querySelector('ul');
  inputData.forEach(value =>
    listHere.appendChild(document.createElement('li'))
      .textContent = `${value.book_name}`);
};

const loadDetailedTable = (inputData) => {
  const tableHere: Node = document.querySelector('table');
  const newRow: Node = document.createElement('tr');
  const newHeader: Node = document.createElement('th');
  const newCell: Node = document.createElement('td');

};