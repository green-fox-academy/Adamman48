'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

let height: number = 0;
let width: number = 0;
for (let i: number = 0; i <= 600; i = i + 600) {
    ctx.beginPath();
    ctx.moveTo(i, height);
    ctx.lineTo(canvas.width - i, canvas.height - height);
    if (i === 0) {
        ctx.strokeStyle = 'green';
        ctx.stroke();
    } else {
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }
}