'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let rectWidth: number[] = [300, 80, 177, 69];
let rectHeight: number[] = [48, 260, 77, 69];
let rectColor: string[] = ['green', 'red', 'yellow', 'blue'];

function drawRect(x: number, y: number, k: number, z: number, c: string) {
    ctx.fillStyle = c;    
    ctx.fillRect(x, y, k, z);
}

for (let i: number = 0; i < 400; i = i + 100) {
    drawRect((100 * (i / 100)), (100 * (i / 100)), rectWidth[i / 100], rectHeight[i / 100], rectColor[i / 100]);
}