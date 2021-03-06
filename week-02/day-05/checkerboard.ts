'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function drawSquares(startX: number, startY: number, size: number) {
    ctx.strokeStyle = 'black';
    ctx.fillRect(startX, startY, size, size);
    ctx.strokeRect( startX, startY, size, size);
}

let startCoordX: number = 1;
let startCoordY: number = 1;
let sizeOf: number = 40;
let rowsColumns: number = 8;
let kolor1: string = 'white';
let kolor2: string = 'black';

for (let i: number = 0; i < rowsColumns; i++) {
    for (let j: number = i; j < rowsColumns + i; j++) {
        if (j % 2 === 0) {
            ctx.fillStyle = kolor1;
        } else {
            ctx.fillStyle = kolor2
        }
            drawSquares(startCoordX, startCoordY, sizeOf);
        startCoordY = startCoordY + sizeOf;
        ctx.fillStyle = kolor2;
    }
    startCoordX = startCoordX + sizeOf;
    startCoordY = (startCoordY - startCoordY) + 1;
}