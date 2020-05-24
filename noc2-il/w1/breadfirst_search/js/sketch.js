let data;
let graph;
let dropdown;

function preload() {
  data = loadJSON('kevinbacon.json')
}

function setup() {
  noCanvas();
  dropdown = createSelect();
  dropdown.changed(bfs)

  graph = new Graph();
  parseJson(data);

  console.log(graph);

  // search("Mickey Rourke", "Mickey Rourke");
  //search("Mickey Rourke", "Kevin Bacon");
  // bfs("Rachel McAdams", "Kevin Bacon");
}

function bfs() {
  let queue = []

  let start = graph.setStart(dropdown.value());
  let end = graph.setEnd("Kevin Bacon");

  start.searched = true;
  queue.push(start);

  while (queue.length > 0) {
    let current = queue.shift();
    if (current === end) {
      console.log("Found " + current.value);
      break;
    }
    var edges = current.edges;
    edges.forEach(neighbor => {
      if (!neighbor.searched) {
        neighbor.searched = true;
        neighbor.parent = current;
        queue.push(neighbor);
      }
    })
  }

  printPath(end);
  graph.reset();
}


function printPath(end) {
  let path = [];
  path.push(end);
  let next = end.parent;
  while (next != null) {
    path.push(next);
    next = next.parent;
  }
  var pathString = "Path: "
  path.reverse().forEach(
    function (node, index) {
      pathString += node.value;
      if ((index +1) != path.length) {
        pathString += "-> ";
      }
    });
  
  createP(pathString);
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
        dropdown.option(actor);
      }
      movieNode.addEdge(actorNode);
    });

  });
}
