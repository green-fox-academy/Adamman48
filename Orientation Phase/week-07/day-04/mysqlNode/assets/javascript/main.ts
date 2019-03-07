'use strict';

const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/booknames');
http.onload = () => {
  const data = JSON.parse(http.responseText);
  loadBookNamesList(data);
};
http.send();

http.open('GET', 'http://localhost:3000/detailedbooklist');
http.onload = () => {
  const data = JSON.parse(http.responseText);
  loadDetailedTable(data);
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
  
  for (let i: number = 0; i < Object.keys(inputData[0]).length; i++) {
    tableHere.appendChild(newRow).appendChild(newHeader)
      .textContent = `${Object.keys(inputData)[i].replace(/\W/, ' ')}`
  }
  inputData.forEach(value => {})
  });  
};