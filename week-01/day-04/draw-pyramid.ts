'use.strict';

export {}

let lineCount: number = 4;
let star: any = '*';
let space: any = '';

for (let i: number = 0; i < lineCount; i++) {
    for (let sp: number = 0; sp < lineCount - i; sp++) {
    space += '0';
    }
    for (let st: number = 1; st < i; st++) {
    star += '*'
    }
console.log(space + star);
space = '';
star = '';        
}