let data;
var graph;

function preload() {
  data = loadJSON('kevinbacon.json')
}

function setup() {
  noCanvas();

  graph = new Graph();
  parseJson(data);

  console.log(graph);

}

function draw() {

}

function parseJson(data) {
  let movies = data.movies;

  movies.forEach(movie => {

    let movieNode = new Node(movie.title)
    graph.addNode(movieNode);

    movie.cast.forEach(actor => {
      let actorNode = graph.getNode(actor);
      if (!actorNode) {
        actorNode = new Node(actor);
        graph.addNode(actorNode);
      }
      movieNode.addEdge(actorNode);
    });

  });
}
