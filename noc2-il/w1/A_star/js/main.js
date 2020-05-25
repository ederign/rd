//code based on  Coding Challenge 51.1: A* Pathfinding Algorithm - Part 1
//Link: https://www.youtube.com/watch?v=aKYlikFAV4k&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=7&t=0s

//grid size
let cols = 50;
let rows = 50;
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


function setup() {
  createCanvas(600, 600)

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
  start.wall = false;
  end = grid[cols - 1][rows - 1];
  end.wall = false;

  openSet.push(start);

}

function draw() {
  background(255);

  a_star();

  visualize();
}


function visualize() {
  //draw current state

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    }
  }

  //color end nodes
  start.show(color(0, 255, 0));
  end.show(color(255, 0, 0));


  path = [];
  let temp = current;
  path.push(temp);

  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }

  path.forEach(path => {
    // path.show(color(0, 0, 255));
  });

  stroke(255, 0, 200);
  strokeWeight(w / 2)
  noFill();
  beginShape();
  path.forEach(path => {
    vertex(path.i * w + w / 2, path.j * h + h / 2)
  });
  endShape();
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

      if (!closedSet.includes(neighbor) && dontColideWithWall(current, neighbor)) {

        let tempG = current.g + heuristic(neighbor, current);

        //path better than before?
        let newPath = false;
        if (openSet.includes(neighbor)) {
          if (tempG < neighbor.g) {
            neighbor.g = tempG; //old g was better
            newPath = true;
          }
        } else {
          neighbor.g = tempG;
          newPath = true;
          openSet.push(neighbor);
        }

        //heuristic
        if (newPath) {
          neighbor.h = heuristic(neighbor, end);
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.previous = current;
          console.log('Walk');
        }
      }

    });
  }
  else {
    createDiv('No solution');

    noLoop();
    return;
  }
}

function dontColideWithWall(current, neighbor) {

  // console.log("dontColideWithWall");
  // console.log("current: ", current.i, current.j, current.wall);
  // console.log("neighbor: ", neighbor.i, neighbor.j, neighbor.wall);
  let diagonalWall = false;

  if (northwest(current, neighbor)) {
    let top = grid[current.i][current.j - 1];
    let bottom = grid[current.i - 1][current.j];
    if (top.wall || bottom.wall) {
      diagonalWall = true;
    }
  }
  else if (southeast(current, neighbor)) {
    let top = grid[current.i + 1][current.j];
    let bottom = grid[current.i][current.j + 1];
    if (top.wall || bottom.wall) {
      diagonalWall = true;
    } 
  }
  else if (northeast(current, neighbor)) {
    let top = grid[current.i ][current.j -1];
    let bottom = grid[current.i +1][current.j ];
    if (top.wall || bottom.wall) {
      diagonalWall = true;
    } 
  }
  else if (southwest(current, neighbor)) {
    let top = grid[current.i -1 ][current.j];
    let bottom = grid[current.i][current.j +1];
    if (top.wall || bottom.wall) {
      diagonalWall = true;
    }
  }


  return !neighbor.wall && !diagonalWall;
}


// Helper functions

function northwest(current, neighbour) {
  return (current.i - 1 === neighbour.i) && (current.j - 1 === neighbour.j);
}

function southeast(current, neighbour) {
  return (current.i + 1 === neighbour.i) && (current.j + 1 === neighbour.j);
}

function northeast(current, neighbour) {
  return (current.i + 1 === neighbour.i) && (current.j - 1 === neighbour.j);
}

function southwest(current, neighbour) {
  return (current.i - 1 === neighbour.i) && (current.j + 1 === neighbour.j);
}




//"Guess" from how far it's between two points(raw distance in this case)
function heuristic(start, end) {
  // return abs(start.i - end.i) + abs(start.j - end.j);
  return dist(start.i, start.j, end.i, end.j);
}

function removeFromArray(arr, elt) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      arr.splice(i, 1);
    }
  }
}