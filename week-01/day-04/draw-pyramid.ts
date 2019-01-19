'use.strict';

export {}

let lineCount: number = 4;
let star: any = '*'
let space: any = ' ';
let rep: number = lineCount;

for (let i: number = 1; i <= lineCount; i++) {
    console.log(space.repeat(rep));
    for (let u: number = 1; u <= lineCount * 2; u++) {
        console.log(star.repeat(u));
    rep--;
    i++;
    u++;
    }
}