'use.strict';

export {}

let lineCount: number = 10;
let star: any = '';
let space: any = '';

for (let i: number = 0; i < lineCount; i++) {
    for (let sp: number = 0; sp < lineCount - i; sp++) {
    space += ' ';
    }
    for (let st: number = 0; st < i * 2 + 1; st++) {
    star += '*'
    }
console.log(space + star);
space = '';
star = '';        
}