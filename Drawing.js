var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var x = "black";
var pos = { x: 0, y: 0 };

var mouseHold = false;
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);
canvas.addEventListener('mouseup', function(){
    mouseHold = false;
});

function setPosition(e) {
    
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function draw(e) {
    if(e.buttons !== 1 && e.buttons !== 4) return;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = x;
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();   
}
function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

function erase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 14;
    else y = 2;
}
