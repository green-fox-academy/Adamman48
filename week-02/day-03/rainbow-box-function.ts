'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let rainbow: string[] = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];

function drawSquare(x, y) {
    ctx.fillStyle = y;
    ctx.fillRect(canvas.width / 2 - (x / 2), canvas.height / 2 - (x / 2), x, x);
}

for (let i: number = 1; i <= rainbow.length; i++) {
    drawSquare((canvas.height / rainbow.length) * (rainbow.length - i + 1), rainbow[i])
}