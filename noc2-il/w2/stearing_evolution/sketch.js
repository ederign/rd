//Coding while watching the great 
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
//https://www.youtube.com/watch?v=flxOkx0yLrY&list=PLRqwX-V7Uu6bJM3VgzjNV5YxVxUwzALHV&index=15&t=0s


// Implements Craig Reynold's autonomous steering behaviors
// One vehicle "seeks"
// See: http://www.red3d.com/cwr/

let v;

function setup() {
  createCanvas(640, 360);
  v = new Vehicle(width / 2, height / 2);
}

function draw() {
  background(51);

  let mouse = createVector(mouseX, mouseY);

  // Draw an ellipse at the mouse position
  fill(127);
  stroke(200);
  strokeWeight(2);
  ellipse(mouse.x, mouse.y, 48, 48);

  // Call the appropriate steering behaviors for our agents
  v.seek(mouse);
  v.update();
  v.display();

}