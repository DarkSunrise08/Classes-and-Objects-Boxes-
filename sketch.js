var box1;

function setup() {
  createCanvas(600, 400);
  box1 = new Box(200,200,50,40);
}

function draw() {
  background(220);
  box1.show();
  box1.width(100);
  box1.velocity(2,4);
}

