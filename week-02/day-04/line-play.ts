'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let scale: number = 10;

function drawLines(x) {
    let kolor: string[] = ['green', 'purple'];
    for (let i: number = x; i < canvas.height; i = i + x) {
        if (x <= 0) {
        x = 1;
    }
        ctx.strokeStyle = kolor[0];
        ctx.beginPath();
        ctx.moveTo((canvas.width - canvas.width), i);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
            ctx.strokeStyle = kolor[1];
            ctx.beginPath();
            ctx.moveTo(canvas.width, (canvas.height - i));
            ctx.lineTo((canvas.width - i), (canvas.height - canvas.height));
            ctx.stroke();
    }
}

drawLines(scale);