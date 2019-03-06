'use strict';

  let input: string = `This is a try? I don't know! What the fuck is going on. Believe me.`;
  let fillThis = [];
  let output = [];
  let tempArray = [];

  fillThis = input.toLowerCase().split('?').join('$').split('.').join('$').split('!').join('$').split('$')

  fillThis.splice(0, fillThis.length - 1).forEach(value => tempArray.push(value.split(/\s/)));

  


  console.log(tempArray)
