'use strict';

export {}

let lineCount: number = 4;
let star: any = '';
let space: any = '';

for (let i: number = 0; i < lineCount; i++) {
    for (let sp1: number = 0; sp1 < lineCount - i; sp1++) {
    space += ' ';
    }
    for (let st1: number = 0; st1 < i * 2 + 1; st1++) {
    star += '*'
    }
console.log(space + star);
space = '';
star = '';        
}

for (let k: number = 0; k < lineCount; k++) {
    for (let sp2: number = 0; sp2 < k + lineCount / 2; sp2++) {
    space += ' ';
    }
    for (let st2: number = lineCount; st2 > lineCount - 1; st2--) {
    star += '*';
    }
console.log(space + star);
space = '';
star = '';
}

0  5  0 2*4+1 
1  5  0 2*4+1
2  5  0 
3  5  0
4  5  0

5  5  0

0  3  1
1  3  1
2  3  1

3  3  1

0  1  2

1  1  2