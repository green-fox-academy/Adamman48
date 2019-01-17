'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

const multip: number = 60;
const secsDay: number = 24 * (multip ** 2);

let secondsSpent: number = currentHours * (multip ** 2) + currentMinutes 
* multip + currentSeconds;

console.log(secsDay - secondsSpent);
