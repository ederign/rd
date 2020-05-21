class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(n) {
    if (n.value < this.value) {
      if (this.left === null) {
        this.left = n;
      }
      else {
        this.left.addNode(n);
      }

    } else if (n.value > this.value) {
      if (this.right === null) {
        this.right = n;
      }
      else {
        this.right.addNode(n);
      }
    }
  }

  visit() {
    if (this.left != null) {
      this.left.visit();
    }
    console.log(this.value);
    if (this.right != null) {
      this.right.visit();
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
