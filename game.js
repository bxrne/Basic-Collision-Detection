var canvas;
var ctx;
var fps;
var keys = [];

var rect1 = {
    x:0,
    y:0,
    w:40,
    h:40,
    speed: 4,
    color:"green"
}

var rect2 = {
    x:380,
    y:0,
    w:40,
    h:40,
    speed: 4,
    color:"green"
}

function init() {
canvas = document.getElementById('c');
ctx = canvas.getContext('2d');
fps = 60;

console.log(fps + "/" + canvas.width +" X "+canvas.height + "" + ctx);
}

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = rect1.color;
ctx.fillRect(rect1.x, rect1.y, rect1.w, rect1.h);

ctx.fillStyle = rect2.color;
ctx.fillRect(rect2.x, rect2.y, rect2.w, rect2.h);

update();
}

function update() {
    document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

    if(checkCollision(rect1, rect2)) {
    rect1.color = "red";
    rect2.color = "red";
    }else {
    rect1.color = "green";
    rect2.color = "green";
    }

    if(rect1.x < 0)  {rect1.x = 0;}
    if(rect1.y < 0)  {rect1.y = 0;}
    if(rect1.y > 360)  {rect1.y = 360;}
    if(rect1.x > 360)  {rect1.x = 360;}

    if(keys[39]) {rect1.x += rect1.speed;}
    if(keys[37]) {rect1.x -= rect1.speed;}
    if(keys[38]) {rect1.y -= rect1.speed;}
    if(keys[40]) {rect1.y += rect1.speed;}

    if(rect2.x < 0)  {rect2.x = 0;}
    if(rect2.y < 0)  {rect2.y = 0;}
    if(rect2.y > 360)  {rect2.y = 360;}
    if(rect2.x > 360)  {rect2.x = 360;}

    if(keys[68]) {rect2.x += rect2.speed;}
    if(keys[65]) {rect2.x -= rect2.speed;}
    if(keys[87]) {rect2.y -= rect2.speed;}
    if(keys[83]) {rect2.y += rect2.speed;}
}
function checkCollision(first, second) {
return !(first.x > second.x + second.w ||
         first.x + first.w < second.x ||
         first.y > second.y + second.h ||
         first.y + first.h < second.y)
}

init();
window.onload = setInterval(draw, 1000/fps);