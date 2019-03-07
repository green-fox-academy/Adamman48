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
  for (let i: number = 0; i <= inputData.length; i++) {
    let newRow: Node = document.createElement('tr');
    document.querySelector('table').appendChild(newRow);
  };
  for (let i: number = 0; i < Object.keys(inputData[0]).length; i++) {
    let newHeader: Node = document.createElement('th');
    let headerTitles: string[] = ['Title', 'Author', 'Category', 'Publisher', 'Price'];
    document.querySelector('tr').appendChild(newHeader)
      .textContent = `${headerTitles[i]}`;
  };
  for (let i: number = 1; i <= inputData.length; i++) {
    const insertHere: NodeList = document.querySelectorAll('tr');
    for (let j: number = 0; j < Object.keys(inputData[0]).length; j++) {
      let newCell: Node = document.createElement('td');
      insertHere[i].appendChild(newCell).textContent =
        `${Object.values(inputData[i-1])[j]}`;
    };
  };
};