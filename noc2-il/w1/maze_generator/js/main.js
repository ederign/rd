//Code writing during Coding Challenge #10.1: Maze Generator with p5.js 
//https://www.youtube.com/watch?v=HyK_Q5rrcr4&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=10&t=0s

let cols, rows;
let w = 40;
let h = 40;
let grid = [];

function setup() {
    createCanvas(600, 600);
    cols = floor(width / w);
    rows = floor(height / w);

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            let cell = new Cell(x, y);
            grid.push(cell);
        }
    }
    // console.log(grid)

}


function draw() {
    background(51);
    grid.forEach(cell => {
        cell.show();
    })
}