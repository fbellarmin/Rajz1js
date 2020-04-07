var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.fillStyle = 'orange';
context.fillRect(125,50,175,175);

context.beginPath();
context.strokeStyle = 'red';
context.moveTo(0,300);
context.lineTo(450,0);
context.stroke();

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


context.fillStyle = 'red';
context.fillRect(200,150,canvasWidth-200,canvasHeight-150);


var size = 100;
var padding = 10;

context.fillStyle = 'green';
context.fillRect(canvasWidth - size - padding, canvasHeight - size - padding , size, size);

var positionX = canvasWidth / 2 - size * 0.75;
var positionY = canvasHeight / 2 - size * 0.75;

context.fillStyle = 'rgba(255,0,0,.5)';
context.fillRect(positionX, positionY, size, size);

positionX += size / 2;
positionY += size / 2;

context.fillStyle = 'rgba(0,0,255,.5)';
context.fillRect(positionX, positionY, size, size);