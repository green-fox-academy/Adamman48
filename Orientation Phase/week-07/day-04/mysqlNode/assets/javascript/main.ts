'use strict';

const bookNames = () => {
const http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/booknames');
http.onload = () => {
  const data = JSON.parse(http.responseText);
  loadBookNamesList(data);
};
http.send();
};

bookNames();

const detailedTable = () => {
const http2 = new XMLHttpRequest();
http2.open('GET', 'http://localhost:3000/detailedbooklist');
http2.onload = () => {
  const data = JSON.parse(http2.responseText);
  loadDetailedTable(data);
};
http2.send();
};

detailedTable();

const loadBookNamesList = (inputData) => {
  const listHere: Node = document.querySelector('ul');
  inputData.forEach(value =>
    listHere.appendChild(document.createElement('li'))
      .textContent = `${value.book_name}`);
};

const loadDetailedTable = (inputData) => {
  let newRow: Node = document.createElement('tr');
  let newHeader: Node = document.createElement('th');
  let newCell: Node = document.createElement('td');
  
  for (let i: number = 0; i <= inputData.length; i++) {
    document.querySelector('table').appendChild(document.createElement('tr'));
  };
  for (let i: number = 0; i < Object.keys(inputData[0]).length; i++) {
    let headerTitles: string[] = ['Title', 'Author', 'Category', 'Publisher', 'Price'];
    document.querySelector('tr').appendChild(document.createElement('th'))
      .textContent = `${headerTitles[i]}`;
  };

  const insertHere: NodeList = document.querySelectorAll('tr');

  for (let i: number = 1; i <= inputData.length; i++) {
    for (let j: number = 0; j < Object.keys(inputData[0]).length; j++) {
      document.querySelectorAll('tr')[i].appendChild(document.createElement('td')).textContent =
        `${Object.values(inputData[i-1])[j]}`;
    };
  };
};