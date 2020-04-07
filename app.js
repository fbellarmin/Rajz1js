var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.fillStyle = 'orange';
context.fillRect(125,50,200,200);

context.beginPath();
context.strokeStyle = 'red';
context.moveTo(0,300);
context.lineTo(450,0);
context.stroke();

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

context.fillStyle = 'red';
context.fillRect(200,150,canvasWidth-200,canvasHeight-150);