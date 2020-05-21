let tree;


function setup() {
  console.log("setup")
  noCanvas();

  tree = new Tree();

  for (var i = 0; i < 10; i++) {
    const number = floor(random(0, 100));
    tree.addValue(number);
  }
  tree.addValue(1337);
 
  tree.traverse();
  console.log(tree.search(1337))
}




