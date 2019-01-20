'use strict';

export {}

let lineCount: number = 4;
let star: any = '';
let space: any = '';

for (let i: number = 0; i < lineCount; i++) {
    for (let sp1: number = 0; sp1 < lineCount - i; sp1++) {
    space += '0';
    }
    for (let st1: number = 0; st1 < i * 2 + 1; st1++) {
    star += '*'
    }
console.log(space + star);
space = '';
star = '';        
}

for (let k: number = 0; k < lineCount; k++) {
    for (let sp2: number = 1; sp2 < k + lineCount / 2; sp2++) {
    space += '0';
    }
    for (let st2: number = 0; st2 ;st2++) {
    star += '*';
    }
console.log(space + star);
space = '';
star = '';
}

