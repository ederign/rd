class DNA {
  constructor(lifespan) {
    this.genes = [];
    for (let i = 0; i < lifespan; i++) {
      this.genes[i] = p5.Vector.random2D();
    }
  }
}