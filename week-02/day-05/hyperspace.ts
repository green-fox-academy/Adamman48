'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let scale: number = 2;
let hyper: string[] = ['rgb(172, 214, 238)', 'black']

function centerLine (axisX: number, axisY: number) {
    for (let i: number = 0; i <= canvas.width; i = i + scale) {
    let hyperRandom: number = Math.round(Math.random());
    ctx.beginPath();
    hyperRandom = Math.round(Math.random());
    ctx.strokeStyle = hyper[hyperRandom];
    ctx.moveTo(axisX, axisY);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
    ctx.beginPath();
    hyperRandom = Math.round(Math.random());
    ctx.strokeStyle = hyper[hyperRandom];
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width - axisX, canvas.height);
    ctx.stroke();
    axisX = axisX + scale;
    } axisX = 0;
    for (let j: number = 0; j <= canvas.height; j = j + scale) {
        let hyperRandom: number = Math.round(Math.random());
        ctx.beginPath();
        hyperRandom = Math.round(Math.random());
        ctx.strokeStyle = hyper[hyperRandom];
        ctx.moveTo(axisX, axisY);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
        ctx.beginPath();
        hyperRandom = Math.round(Math.random());
        ctx.strokeStyle = hyper[hyperRandom];
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height - axisY);
        ctx.stroke();
        axisY = axisY + scale;
    }
    
}

let startX: number = 0;
let startY: number = 0;

centerLine(startX, startY);