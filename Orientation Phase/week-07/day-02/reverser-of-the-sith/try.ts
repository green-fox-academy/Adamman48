'use strict';

  let input: string = `This is a try? I don't know! What the fuck is going on. Believe me.`;
  let tempArray = [];
  let output = [];
  
  let fillThis: string[] = input.toLowerCase()
    .split('?').join('$')
      .split('.').join('$')
        .split('!').join('$').split('$');

  fillThis.splice(0, fillThis.length - 1)
    .forEach(value => tempArray.push(value.split(/\s/)));

  tempArray.map((value, index) => 
    {index > 0 ? value.splice(0, 1) : null});
  
  console.log(tempArray)
