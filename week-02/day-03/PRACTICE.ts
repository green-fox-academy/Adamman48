'use strict';

//Boilerplate
const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//Draw recatangle
ctx.fillRect(10, 10, 100, 100);

//Draw a colored rectangle
ctx.fillStyle = 'red';
ctx.fillRect(110, 110, 100, 100);

//Draw a line
ctx.beginPath();
ctx.moveTo(210, 210);
ctx.lineTo(300, 300);

//Draw a colored line
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(310, 310);
ctx.lineTo(400, 400);
ctx.stroke();

//Draw a circle
ctx.beginPath();
ctx.arc(500, 500, 50, 0, Math.PI * 2);
ctx.stroke();