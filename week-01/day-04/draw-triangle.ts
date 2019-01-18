'use.strict';

let lineCount: number = 4;

let star: string = '*';

while (lineCount - 4 <= 3) {
    console.log(star);
    lineCount++;
    star += '*';
}