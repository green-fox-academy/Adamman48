'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x: number, y: number) {
    ctx.strokeRect(x, y, 50, 50);
}

let numOfSquares: number = 3;

for (let i: number = 0; i < numOfSquares; i++) {
    drawSquare(Math.round((Math.random() * (canvas.width - 50)) + 1), (Math.round((Math.random() * (canvas.height - 50)) + 1);
}