'use strict';

let input: string = `This is a try? I don't know! What the fuck is going on. Believe me.`;
let tempArray: string[][] = [];
let output: string[] = [];
  
let fillThis: string[] = input.toLowerCase()
  .split('?').join('$')
    .split('.').join('$')
      .split('!').join('$').split('$');

fillThis.splice(0, fillThis.length - 1)
  .forEach(value => tempArray.push(value.split(/\s/)));

tempArray.map((value, index) => 
  {index > 0 ? value.splice(0, 1) : null});
  
for (let i: number = 0; i < tempArray.length; i++) {
  for (let j: number = 1; j < tempArray[i].length; j += 2) { 
    [tempArray[i][j-1], tempArray[i][j]] = [tempArray[i][j], tempArray[i][j-1]];
  }
}  

tempArray = tempArray.map(value => value.join(' '))
  .map(value => value.split(''))
  
tempArray.forEach(value => value[0] = value[0].toUpperCase());


console.log(tempArray)
