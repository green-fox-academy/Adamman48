'use strict';

const konzola = console.log;

let input: string = `Is this for real? I don't know what the fuck is going on! Believe me.`;
let tempArray: string[][] = [];
  
let fillThis: string[] = input.toLowerCase()
  .split('?').join('$')
    .split('.').join('$')
      .split('!').join('$').split('$');

fillThis.splice(0, fillThis.length - 1)
  .forEach(value => tempArray.push(value.split(/\s/)));

tempArray.map((value, index) => 
  {index > 0 ? value.splice(0, 1) : null});

//swapping
for (let i: number = 0; i < tempArray.length; i++) {
  for (let j: number = 1; j < tempArray[i].length; j += 2) { 
    [tempArray[i][j-1], tempArray[i][j]] = [tempArray[i][j], tempArray[i][j-1]];
  }
}  

tempArray = tempArray.map(value => value.join(' '))
  .map(value => value.split(''))
  
tempArray.forEach(value => value[0] = value[0].toUpperCase());

//punctuations
let punctuationList: string[] = [];
let textFlow: string = input.replace(/\s/g, '').replace(`'`, '').replace(':', '').replace(';', '');
for (let i: number = 0; i < tempArray.length; i++) {
  punctuationList.push(textFlow[textFlow.search(/\W/)]);
  textFlow = textFlow.slice(textFlow.search(/\W/) + 1, textFlow.length);
}

tempArray.map((value, index) => {value.push(punctuationList[index])});

konzola(tempArray.map(value => value.join('')).join(' '));

//need to uppercase I as well as putting in random stuff