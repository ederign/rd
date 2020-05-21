class Tree {
  constructor(root) {
    this.root = null;
  }

  addValue(n) {
    if (this.root === null) {
      this.root = new Node(n);
    } else {
      this.root.addNode(new Node(n));
    }
  }

  traverse() {
    this.root.visit();
  }

  search(val) {
    return this.root.search(val);  
  }

}
 