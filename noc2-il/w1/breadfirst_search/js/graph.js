class Graph {

  constructor() {
    this.nodes = [];
    this.graph = {};
  }

  addNode(n) {
    this.nodes.push(n);
    this.graph[n.value] = n;
  }

  getNode(n) {
    return this.graph[n];
  }
}