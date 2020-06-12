class Population {

  constructor(size) {
    this.rockets = [];
    this.popsize = size;
    this.matingpool = [];
    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i] = new Rocket();
    }
  }

  evaluate() {

    let maxfit = 0;
    
    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();
      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }
    // console.log(this.rockets);
    //normalize
    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i].fitness /= maxfit;
    }


    this.matingpool = [];
    //improved pool selection
    for (let i = 0; i < this.popsize; i++) {
      let n = this.rockets[i].fitness * 100;
      for (let j = 0;  j < n; j++) {
        this.matingpool.push(this.rockets[i]);
      }
    }

  }

  selection() {
    let newRockets = [];
    for (let i = 0; i < this.rockets.length; i++) {
      let parentA = random(this.matingpool).dna;
      let parentb = random(this.matingpool).dna;
      let child = parentA.crossover(parentb);
      child.mutation();
      newRockets[i] = new Rocket(child);
    } 
    this.rockets = newRockets;
  }

  run() {
    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}