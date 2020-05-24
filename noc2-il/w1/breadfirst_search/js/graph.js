class Graph {

  constructor() {
    this.nodes = [];
    this.graph = {};
    this.end = null;
    this.start = null;
  }

  reset() {
    this.nodes.forEach(node => {
      node.searched = false;
      node.parent = null;
    });
  }


  setStart(actor) {
    this.start = this.graph[actor];
    return this.start;
  }

  setEnd(actor) {
    this.end = this.graph[actor];
    return this.end;
  }

  addNode(n) {
    this.nodes.push(n);
    this.graph[n.value] = n;
  }

  getNode(n) {
    return this.graph[n];
  }
}