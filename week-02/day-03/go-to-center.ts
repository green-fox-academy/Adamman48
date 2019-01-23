'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function drawLine(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    if (x < canvas.width / 2 && y < canvas.height / 2) {
        ctx.strokeStyle = 'red';
        ctx.stroke();
    } else if (x > canvas.width / 2 && y < canvas.height / 2) {
        ctx.strokeStyle = 'green';
        ctx.stroke();
    } else if (x > canvas.width / 2 && y > canvas.height / 2) {
        ctx.strokeStyle = 'yellow';
        ctx.stroke();
    } else if (x < canvas.width / 2 && y > canvas.height / 2) {
        ctx.strokeStyle = "blue";
        ctx.stroke();
    } else if (x === canvas.width / 2 && y === canvas.height / 2){
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 25, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i: number = 0; i < 330; i = i + 110) {
    drawLine(200 + i, 0 + i);
}