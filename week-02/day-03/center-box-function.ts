'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquareinCenter(x: number) {
    let red: number = Math.floor((Math.random() * 256) + 1);
    let green: number = Math.floor((Math.random() * 256) + 1);
    let blue: number = Math.floor((Math.random() * 256) + 1);
    let color: string = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    ctx.strokeRect((canvas.width / 2 - x / 2), (canvas.height / 2 - x / 2), x, x);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
}

let numberOfSquares: number = 3;

for (let i: number = 0; i < numberOfSquares; i++) {
    let size: number = Math.round((Math.random() * canvas.height) + 1);
    if (size > canvas.height) {
        size = canvas.height;
        drawSquareinCenter(size);
    } else {
    drawSquareinCenter(size)
    }
}