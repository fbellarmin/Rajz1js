var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.fillStyle = 'orange';
context.fillRect(125,50,200,200);

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