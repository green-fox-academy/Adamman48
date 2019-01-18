'use strict';

// new code
let a: number = 24;
let out: number = 0;

a %= 2;

if (a === 0) {
    out += 1;
    console.log(out);
}

// new code
let b: number = 13;
let out2: string = '';

if (10 < b && b < 20) {
    out2 = 'Sweet!';
} else if (b < 10) {
    out2 = 'Less!';
} else if (b > 20) {
    out2 = 'More!';
}

console.log(out2);

//new code
let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits >= 50 && !isBonus) {
    c = c - 2;
} else if (credits < 50 && !isBonus) {
    c = c - 1;
} else if (isBonus) {
    c = c;
}

console.log(c);

//new code
let d: number = 8;
let time: number = 120;
let out3: string = '';

d %= 4;

if (d === 0 && time <= 200) {
    out3 = 'check';
} else if (time > 200) {
    out3 = 'Time out';
} else {
    out3 = 'Run Forest, Run!'
}

console.log(out3);