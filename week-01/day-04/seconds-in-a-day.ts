'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

const multip: number = 60;
const secsDay: number = 24 * (multip ** 2);
currentHours = currentHours * (multip ** 2);
currentMinutes *= multip;
currentSeconds = multip - currentSeconds;

let secondsLeftThisDay: number = currentHours + currentMinutes + 
currentSeconds;

console.log(secsDay - 
secondsLeftThisDay);
