let angle;
let bob;
let len;
let origin;

let angleV = 0;
let angleA = 0.0001;

let gravity = 1;
let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angle = PI / 4;
  bob = createVector();
  len = 300;
  origin = createVector(width / 2, 0);
}

function draw() {
  background(0);

  let force = gravity * sin(angle);
  angleA = (-1 * force) / len;

  angleV += angleA;
  angle += angleV;

  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  stroke(255);
  strokeWeight(8);
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
}
