//coding during Coding Challenge https://www.youtube.com/watch?v=BAejnwN4Ccw&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=14&t=0s
//and also
//https://www.youtube.com/watch?v=M3KTWnTrU_c&list=PLRqwX-V7Uu6bJM3VgzjNV5YxVxUwzALHV&index=12

let cities = [];
let totalCities = 20;

let popSize = 500;
let population = [];
let fitness = [];

let recordDistance = Infinity;
let bestPath;
let currentBestPath;

function setup() {
  createCanvas(800, 800);

  let order = [];

  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width), random(height / 2));
    cities[i] = v;
    order[i] = i;
  }

  for (let i = 0; i < popSize; i++) {
    population[i] = shuffle(order);
  }
  createP("TSP with Genetic Algorithm and Crossover");

}

function draw() {
  background(0);
  
  findBest();
  normalizeFitness();
  nextGeneration();

  fill(255);
  for (let i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  //drawing the best one
  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < bestPath.length; i++) {
    let n = bestPath[i];
    vertex(cities[n].x, cities[n].y);
    ellipse(cities[n].x, cities[n].y, 16, 16);
  }
  endShape();


  //current one
  translate(0, height / 2);
   //drawing the best one
   stroke(255, 255, 255);
   strokeWeight(4);
   noFill();
   beginShape();
   for (let i = 0; i < currentBestPath.length; i++) {
     let n = currentBestPath[i];
     vertex(cities[n].x, cities[n].y);
     ellipse(cities[n].x, cities[n].y, 16, 16);
   }
   endShape();

}

function calcDistance(points, order) {
  let sum = 0;
  for (let i = 0; i < order.length - 1; i++) {
    let cityA = points[order[i]];
    let cityB = points[order[i + 1]];
    let d = dist(cityA.x, cityA.y, cityB.x, cityB.y)
    sum += d;
  }
  return sum;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


