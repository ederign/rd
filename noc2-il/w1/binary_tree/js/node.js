class Node {
  constructor(value, x, y, root) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
    this.root = root;
  }

  addNode(n) {
    const childXPositionIncrement = 50;
    const childYPositionIncrement = 50;

    if (n.value < this.value) {
      if (this.left === null) {
        this.left = n;
        this.left.x = this.x - childXPositionIncrement;
        this.left.y = this.y + childYPositionIncrement;
      }
      else {
        this.left.addNode(n);
      }

    } else if (n.value > this.value) {
      if (this.right === null) {
        this.right = n;
        this.right.x = this.x + childXPositionIncrement;
        this.right.y = this.y + childYPositionIncrement;
      }
      else {
        this.right.addNode(n);
      }
    }
  }

  //trees for level and figure out spaces
  visit(parent) {
    if (this.left != null) {
      this.left.visit(this);
    }
    fill(255);
    noStroke();
    textAlign(CENTER);
    text(this.value, this.x, this.y);
    stroke(255);
    noFill();
 
    const ellipseDiameter = 25;
    const radios = ellipseDiameter / 2;
    ellipse(this.x, this.y, ellipseDiameter, ellipseDiameter);

    if (!this.root) {
      line(parent.x, parent.y + radios , this.x , this.y - radios);
    }
   
    noStroke(); 
    if (this.right != null) {
      this.right.visit(this);
    }
  }

 

  search(val) {
    if (this.value === val) {
      return this;
    }
    else if (val < this.value) {
      return this.left != null ? this.left.search(val) : null;
    }
    else {
      return this.right != null ? this.right.search(val) : null;
    }

  }
}
