var canvas = document.getElementById('drawCanvas');
var ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var pos = { x: 0, y: 0 };

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function draw(e) {
    if (e.buttons !== 1) return;

    ctx.beginPath(); 
    ctx.lineWidth = 5;
    ctx.moveTo(pos.x, pos.y); 
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); 
    ctx.stroke(); 
}