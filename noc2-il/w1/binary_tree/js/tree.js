class Tree {
  constructor(root) {
    this.root = null;
  }

  addValue(n) {
    if (this.root === null) {
      this.root = new Node(n, width/2, 16, true);
    } else {
      this.root.addNode(new Node(n));
    }
  }

  traverse() {
    this.root.visit(this.root);
  }

  search(val) {
    return this.root.search(val);  
  }

}
 