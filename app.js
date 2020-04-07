var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.fillStyle = 'orange';
context.fillRect(125,50,200,200);

context.beginPath();
context.strokeStyle = 'orange';
context.moveTo(55,70);
context.lineTo(150,100);
context.stroke();

context.beginPath();
context.strokeStyle = 'red';
context.moveTo(0,300);
context.lineTo(450,0);
context.stroke();
