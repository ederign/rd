//Code writing during Coding Challenge #10.1: Maze Generator with p5.js 
//https://www.youtube.com/watch?v=HyK_Q5rrcr4&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=10&t=0s
// https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker

let cols, rows;
let w = 40;
let grid = [];
let stack = [];

let current;

function setup() {
    frameRate(20);
    createCanvas(600, 600);
    cols = floor(width / w);
    rows = floor(height / w);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    // console.log(grid)
    current = grid[0];
}


function draw() {
    background(51);
    grid.forEach(cell => {
        cell.show();
    })

    current.visit();
    current.highlight();


    let next = current.checkNeighbors();
    // console.log(next); 
    if (next) {
        //step 1
        next.visit();

        //step 2
        stack.push(current);

        //step 3
        removeWalls(current, next);

        //step 4
        current = next;
    } else if (stack.length > 0) {
        current = stack.pop();
        console.log("new current: " + current.i, current.j);
    }

 
}

function removeWalls(a, b) {
    let xa = a.i;
    let xb = b.i
    let ya = a.j;
    let yb = b.j
    if ((xa - xb) === 1) {
        a.removeLeftWall();
        b.removeRightWall();
    }
    else if ((xa - xb) === -1) {
        b.removeLeftWall();
        a.removeRightWall();
    }
    else if ((ya - yb) === 1) {
        a.removeTopWall();
        b.removeBottomWall();
    }
    else if ((ya - yb) === -1) {
        b.removeTopWall();
        a.removeBottomWall();
    }
}