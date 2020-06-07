//code made while watching the great coding train
//https://www.youtube.com/watch?v=bGz7mv2vD6g&list=PLRqwX-V7Uu6bJM3VgzjNV5YxVxUwzALHV&index=11

let population;

function setup() {
  createCanvas(400, 300);
  population = new Population(100);

}

function draw() {
  background(0);
  population.run();
}