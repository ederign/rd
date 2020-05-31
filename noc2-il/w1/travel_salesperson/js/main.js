//coding during Coding Challenge https://www.youtube.com/watch?v=BAejnwN4Ccw&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=14&t=0s


let cities = [];
let totalCities = 8;

let order = [];

let recordDistance;
let bestPath;

let totalPermutations;
let count = 1;

function setup() {
  createCanvas(400, 600);

  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width), random(height/2));
    cities[i] = v;
    order[i] = i;
  }

  let d = calcDistance(cities, order);
  recordDistance = d;
  bestPath = order.slice();

  totalPermutations = factorial(totalCities);
}

function draw() {
  background(0);
  // frameRate(5);
  //drawing the cities

  fill(255);
  for (let i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  //drawing the best one
  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < order.length; i++) {
    let n = bestPath[i];
    vertex(cities[n].x, cities[n].y);
  }
  endShape();


  translate(0, height / 2);
  //drawing the paths
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (let i = 0; i < order.length; i++) {
    let n = order[i];
    vertex(cities[n].x, cities[n].y);
  }
  endShape();

  // let i = floor(random(cities.length));
  // let j = floor(random(cities.length));
  // swap(cities, i, j);

  let d = calcDistance(cities, order);
  if (d < recordDistance) {
    recordDistance = d;
    bestPath = order.slice();
  }

  //display current order
  textSize(32);
  fill(255);
  let percent = 100 * (count / totalPermutations);
  text(nf(percent, 0, 2) + '% completed', 20, height / 2 - 50);

  displayCurrentOrder();
  nextOrder();
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



//lexical order algo
function nextOrder() {

  count++;

  //Step 1
  let largestI = -1;

  for (let i = 0; i < order.length - 1; i++) {
    if (order[i] < order[i + 1]) {
      largestI = i;
    }
  }
  if (largestI === -1) {
    noLoop();
    console.log('finished');
  }
  else {

    //Step 2
    let largestJ = -1;
    for (let j = 0; j < order.length; j++) {
      if (order[largestI] < order[j]) {
        largestJ = j;
      }
    }

    //Step 3
    swap(order, largestI, largestJ);

    //Step 4;
    let endArray = order.splice(largestI + 1)
    endArray.reverse();
    order = order.concat(endArray);

  }

}

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function displayCurrentOrder() {
  textSize(32);
  fill(255);
  let percent = 100 * (count / totalPermutations);
  text(nf(percent, 0, 2) + '% completed', 20, height / 2 - 50);
}