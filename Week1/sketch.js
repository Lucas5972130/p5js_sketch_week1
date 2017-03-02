function setup() {
  resizeCanvas(500,500);
 background(55);
 button1 = createButton('Drag the mouse to draw');
  button1.position(25, 20);
}



function draw() {
}
var value = 0;
function draw() {
  fill(value);
}
function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
function drawCircle(x,y) {
  ellipse(x,y,50,50);
var c = color(0,0);  // Define color 'c'

}


function mouseDragged() {
drawCircle(mouseX,mouseY)

}
