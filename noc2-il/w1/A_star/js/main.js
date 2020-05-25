//code based on  Coding Challenge 51.1: A* Pathfinding Algorithm - Part 1
//Link: https://www.youtube.com/watch?v=aKYlikFAV4k&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=7&t=0s

//grid size
let cols = 25;
let rows = 25;
let grid = new Array(cols);

//nodes still need to be evaluated
let openSet = [];
//nodes already evaluated
let closedSet = [];

//starting and end points
let start;
let end;

//size each cell of grid
let w, h;

//path taken
let path;


class Spot {

  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbors = [];
    this.previous = undefined;
  }

  show(color) {
    fill(color);
    noStroke();
    rect(this.i * w, this.j * h, w - 1, h - 1)
  }

  addNeighbors(grid) {
    const i = this.i;
    const j = this.j;

    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }

    if (i < 0) {
      this.neighbors.push(grid[i - 1][j]);
    }

    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }

    if (j > 0) {
      this.neighbors.push(grid[i][j - 1]);
    }

  }
}

function setup() {
  createCanvas(400, 400)

  //grid cell size
  w = width / cols;
  h = height / rows;

  //making 2d array
  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }


  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  // Adding connections
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }


  start = grid[0][0];
  end = grid[cols - 1][3];

  openSet.push(start);

}

function draw() {
  background(0);
 

  a_star();

  //draw current state

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    }
  }

  for (let i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 0, 0));
  }

  for (let i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0, 255, 0));
  }

  path = [];
  let temp = current;
  path.push(temp);

  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }

  path.forEach(path => {
    path.show(color(0, 0, 255));
  });

}


function a_star() {
  
  if (openSet.length > 0) {
    let winner = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }
    current = openSet[winner];

    if (current === end) {
      noLoop();
      console.log("Done");
    }

    removeFromArray(openSet, current);
    closedSet.push(current);
    

    let neighbors = current.neighbors;

    neighbors.forEach(neighbor => {

      if (!closedSet.includes(neighbor)) {
        // 1 is distance to neighbor
        let tempG = current.g + 1;

        if (openSet.includes(neighbor)) {
          if (tempG < neighbor.g) {
            neighbor.g = tempG; //old g was better
          }
        } else {
          neighbor.g = tempG;
          openSet.push(neighbor);
        }

        //heuristic
        neighbor.h = heuristic(neighbor, end);
        neighbor.f = neighbor.g + neighbor.f;
        neighbor.previous = current;
      }

    });
  }
  else {
    console.log('no solution');
    noLoop();
    return;
  }
}



// Helper functions 

//"Guess" from how far it's between two points(raw distance in this case)
function heuristic(start, end) {
  // return dist(start.i, start.j, end.i, end.j);
  return abs(start.i - end.i) + abs(start.j - end.j);
}

function removeFromArray(arr, elt) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      arr.splice(i, 1);
    }
  }
}