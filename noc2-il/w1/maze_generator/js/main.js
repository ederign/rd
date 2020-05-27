//Code writing during Coding Challenge #10.1: Maze Generator with p5.js 
//https://www.youtube.com/watch?v=HyK_Q5rrcr4&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=10&t=0s

let cols, rows;
let w = 40;
let grid = [];

let current;

function setup() {
    frameRate(5);
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
    let next = current.checkNeighbors();
    // console.log(next); 
    if (next) {
        current = next;
    }

}