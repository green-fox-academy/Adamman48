'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let scale: number = 10;
let quadrant: number = 3

function drawLines(x) {
    let kolor: string[] = ['green', 'purple'];
    for (let i: number = x; i <= canvas.height; i = i + x) {
       if (x <= 0) {
        x = 1;
    }
        ctx.strokeStyle = kolor[0];
        ctx.beginPath();
        ctx.moveTo((canvas.width - canvas.width) / 2, i / 2);
        ctx.lineTo(i / 2, canvas.height / 2);
        ctx.stroke();
    if (i >= canvas.height / 2) {
            i = x;
            for (; i <= canvas.height; i = i + x) {
            ctx.beginPath();
            ctx.moveTo(i / 2, canvas.height / 2);
            ctx.lineTo((canvas.width - canvas.width) / 2, i / 2);
            ctx.stroke();
            }
    }/*
            ctx.strokeStyle = kolor[1];
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, (canvas.height - i) / 2);
            ctx.lineTo((canvas.width - i) / 2, (canvas.height - canvas.height) / 2);
            ctx.stroke();
    }*/
} 

drawLines(scale);