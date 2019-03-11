'use strict';

/* Here is an image inspector, but the buttons are not implemented yet, that will
be your task!
  - the nav buttons (up, down, left, right) move the background by 10px
  - the zoom buttons increase/decrease the image by 20%
  - attach only two event listeners to the nav element
  - one for navigation
  - one for zooming */

let navBar: Node = document.querySelector('nav');
let currentSize: number = 100;
let horizontalPos: number = 0;
let verticalPos: number = 0;

navBar.addEventListener('click', (event: any) => {
  let currentAction: string = event.target.dataset.action;
  let currentDirection: string = event.target.dataset.direction;
  let imgViewer: HTMLElement = document.querySelector('.img-inspector');
  

  currentAction === 'zoom' && currentDirection === 'in' ?
    imgViewer.style.backgroundSize = `${currentSize /= 0.8}%` :
  currentAction === 'zoom' && currentDirection === 'out' && currentSize > 100 ?
    imgViewer.style.backgroundSize = `${currentSize *= 0.8}%` :
  null;
});

navBar.addEventListener('click', (event: any) => {
  let currentAction: string = event.target.dataset.action;
  let currentDirection: string = event.target.dataset.direction;
  let imgViewer: HTMLElement = document.querySelector('.img-inspector');
  
  currentAction === 'move' && currentDirection === 'up' ?
    imgViewer.style.backgroundPosition = `${horizontalPos}px ${verticalPos -= 30}px` :
  currentAction === 'move' && currentDirection === 'down' ?
    imgViewer.style.backgroundPosition = `${horizontalPos}px ${verticalPos += 30}px` :
  currentAction === 'move' && currentDirection === 'left' ?
    imgViewer.style.backgroundPosition = `${horizontalPos -= 30}px ${verticalPos}px` :
  currentAction === 'move' && currentDirection === 'right' ?
    imgViewer.style.backgroundPosition =`${horizontalPos += 30}px ${verticalPos}px` :
  null;
});