function* createIds() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);  
console.log(gen.next().value);    
console.log(gen.next().value);    

