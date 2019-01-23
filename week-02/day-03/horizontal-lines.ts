'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawLine(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width, y);
    if (x < canvas.width / 6) {
        ctx.strokeStyle = 'red';
        ctx.stroke();
    } else if (x < canvas.width / 5 && x > canvas.width / 6) {
        ctx.strokeStyle = 'green';
        ctx.stroke();
    } else if (x <= canvas.width / 4 && x >= canvas.width / 5) {
        ctx.strokeStyle = 'yellow';
        ctx.stroke();
    } else if (x <= canvas.width / 3 && x >= canvas.width / 4) {
        ctx.strokeStyle = 'blue';
        ctx.stroke();
    } else if (x <= canvas.width / 2 && x >= canvas.width / 3) {
        ctx.strokeStyle = 'pink';
        ctx.stroke();
    } else if (x <= canvas.width && x > canvas.width / 2) {
        ctx.strokeStyle = 'orange';
        ctx.stroke();
    }
}

for (let i: number = 0; i < 360; i = i + 120) {
    drawLine(70 + i, 10 + i);
}