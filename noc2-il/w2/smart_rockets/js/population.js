class Population{

  constructor(size) {
    this.rockets = [];
    this.popsize = size;
    
    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i] = new Rocket();
    }
  }

  run() {
    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}