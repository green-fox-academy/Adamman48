'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let scale: number = 20;

function centerLine (axisX: number, axisY: number) {
    for (let i: number = 0; i <= canvas.width; i = i + scale) {
    ctx.beginPath();
    let red: number = Math.floor((Math.random() * 256) + 1);
    let green: number = Math.floor((Math.random() * 256) + 1);
    let blue: number = Math.floor((Math.random() * 256) + 1);
    let color: string = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    ctx.strokeStyle = color;
    ctx.moveTo(axisX, axisY);
    ctx.lineTo(canvas.width - axisX, canvas.height);
    ctx.stroke();
    axisX = axisX + scale;
    } axisX = 0;
    for (let j: number = 0; j <= canvas.height; j = j + scale) {
        let red: number = Math.floor((Math.random() * 256) + 1);
        let green: number = Math.floor((Math.random() * 256) + 1);
        let blue: number = Math.floor((Math.random() * 256) + 1);
        let color: string = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(axisX, axisY);
        ctx.lineTo(canvas.width, canvas.height - axisY);
        ctx.stroke();
        axisY = axisY + scale;
    }
}

let startX: number = 0;
let startY: number = 0;
/*
for (let i: number = 0; i < canvas.height + canvas.width; i = i + scale) {
    centerLine(startX, startY);

}*/

centerLine(startX, startY);