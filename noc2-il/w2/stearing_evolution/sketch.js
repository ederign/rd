//stop at https://www.youtube.com/watch?v=XaOVH8ZSRNA&list=PLRqwX-V7Uu6bJM3VgzjNV5YxVxUwzALHV&index=15


//Coding while watching the great
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
//https://www.youtube.com/watch?v=flxOkx0yLrY&list=PLRqwX-V7Uu6bJM3VgzjNV5YxVxUwzALHV&index=15&t=0s



// Implements Craig Reynold's autonomous steering behaviors
// One vehicle "seeks"
// See: http://www.red3d.com/cwr/

let v;
let food = [];
let poison = [];

function setup() {
  createCanvas(640, 360);
  v = new Vehicle(width / 2, height / 2);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    food.push(createVector(x, y));
  }

  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    poison.push(createVector(x, y));
  }

}

function draw() {
  background(51);

  // Call the appropriate steering behaviors for our agents
  v.behaviors(food, poison);
  //v.eat(poison);
  //v.seek(mouse);
  v.update();
  v.display();

  for (let i = 0; i < food.length; i++) {
    fill(0, 255, 0);
    noStroke();
    ellipse(food[i].x, food[i].y, 8, 8);
  }


  for (let i = 0; i < poison.length; i++) {
    fill(255, 0, 0);
    noStroke();
    ellipse(poison[i].x, poison[i].y, 8, 8);
  }


}