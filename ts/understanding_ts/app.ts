function add(n1: number, n2: number) {
  return n1 + n2;
}

function voidfc() {}

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(1, 2));
