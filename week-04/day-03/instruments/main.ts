'use strict';

import {Instrument, ElectricGuitar, BassGuitar, Violin} from './instruments';

let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
console.log(guitar.play());
console.log(bassGuitar.play());
console.log(violin.play());

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
console.log(guitar2.play());
console.log(bassGuitar2.play());