//code made while watching the great coding train
//https://www.youtube.com/watch?v=bGz7mv2vD6g&list=PLRqwX-V7Uu6bJM3VgzjNV5YxVxUwzALHV&index=11
 //3758, something is wrong with the algo

let target;
let population;
let count = 0;
let lifespan = 400;
let lifeP;
let maxForce = 0.2;

let rx = 100;
let ry = 150;
let rw = 200;
let rh = 10;

function setup() {
  createCanvas(400, 300);
  population = new Population(100);
  lifeP = createP();
  target = createVector(width / 2, 50);
}

function draw() {
  background(0);
  population.run();
  
  lifeP.html(count);

  count++;
  
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
  }

  //obstacle
  fill(255);
  rect(rx, ry, rw, rh);
  
  //target
  ellipse(target.x, target.y, 16, 16);
}