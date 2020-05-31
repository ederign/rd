//coding during https://www.youtube.com/watch?v=BAejnwN4Ccw&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=14&t=0s

//lexicografic: https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering

let cities = [];
let totalCities = 8;

var recordDistance = 0;
let bestPath;

function setup() {
  createCanvas(400, 300);

  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width), random(height));
    cities[i] = v;
  }

  let d = calcDistance(cities);
  recordDistance = d;
  bestPath = cities.slice();
}

function draw() {
  background(0);
  fill(255);
  for (let i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < bestPath.length; i++) {
    vertex(bestPath[i].x, bestPath[i].y);
  }
  endShape();

  let i = floor(random(cities.length));
  let j = floor(random(cities.length));
  swap(cities, i, j);

  let d = calcDistance(cities);
  if (d < recordDistance) {
    recordDistance = d;
    bestPath = cities.slice();
  }
}

function calcDistance(points) {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)
    sum += d;
  }
  return sum;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}