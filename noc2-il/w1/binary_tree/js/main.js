let tree;


function setup() {
  console.log("setup")
  createCanvas(600, 400);
  background(51);

  tree = new Tree();

  for (var i = 0; i < 10; i++) {
    const number = floor(random(0, 100));
    tree.addValue(number);
  }

  tree.addValue(1);
  tree.addValue(0);
  tree.addValue(2);

  tree.traverse(); 
}




