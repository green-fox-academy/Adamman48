'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, x, y, y);
}

let colorOfSteps: string = 'purple';
let size: number = 14;

let start: number = size;
let numOfSteps: number = ((canvas.height - size) / start) - ((canvas.height / 3) / start);

for (let i: number = 0; i < numOfSteps; i++) {
    if (start > canvas.height / 2 || start === 0) {
        document.write('Ooops...The picture cannot load with this input! Please provide a number between 1 - 200!') 
        break; }
    drawSquare(size, start, colorOfSteps);
    size += start;
}

/*
let num: number = Math.sqrt(canvas.width ** 2) + (canvas.height ** 2);
*/