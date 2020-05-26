class Cell {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    //top right bottom left
    this.walls = [true, true, true, true];
  }

  show() {
    let cell_x = this.x * w;
    let cell_y = this.y * h;
    stroke(255);
    // rect(cell_x, cell_y, h, w);
    //top
    if (this.walls[0]) {
      line(cell_x, cell_y, cell_x + w, cell_y);
    }
    //right
    if (this.walls[1]) {
      line(cell_x + w, cell_y, cell_x + w, cell_y + h);
    }
    //bottom
    if (this.walls[2]) {
      line(cell_x + w, cell_y + w, cell_x, cell_y + h);
    }
    //left
    if (this.walls[3]) {
      line(cell_x, cell_y + w, cell_x, cell_y);
    }
  }
}