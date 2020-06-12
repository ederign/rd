function findBest() {
  let currentRecord = Infinity;
  for (let i = 0; i < population.length; i++) {
    const d = calcDistance(cities, population[i]);
    if (d < currentRecord) {
      currentRecord = d;
      currentBestPath = population[i];
    }
    if (d < recordDistance) {
      recordDistance = d;
      bestPath = population[i];
    }
    fitness[i] = 1 / (d + 1);
  }
}

function normalizeFitness() {
  let sum = 0;
  for (let i = 0; i < fitness.length; i++) {
    sum += fitness[i];
  }
  for (let i = 0; i < fitness.length; i++) {
    fitness[i] = fitness[i] / sum;
  }
}

function nextGeneration() {
  let newPopulation = [];

  for (let i = 0; i < population.length; i++) {
    let orderA = pickOne(population, fitness);
    let orderB = pickOne(population, fitness);
    let order = crossOver(orderA, orderB);
    mutate(order, 0.1);
    newPopulation[i] = order;
  }
  population = newPopulation;

}

function crossOver(a, b) {
  let start = floor(random(0, a.lenght));
  let end = floor(random(start + 1, a.lenght));

  let newOrder = a.slice(start, end);

  for (let i = 0; i < b.length; i++) {
    const city = a[i];
    if (!newOrder.includes(city)) {
      newOrder.push(city);
    }

  }
  return newOrder;
}

function mutate(order, rate) {
  for (let index = 0; index < order.length; index++) {
    if (random(1) < rate) {
      let indexA = floor(random(order.length));
      let indexB = (indexA + 1) % totalCities;
      swap(order, indexA, indexB);
    }
  }
}

function pickOne(arr, prob) {
  let index = 0;
  let r = random(1);

  while (r > 0) {
    r = r - prob[index];
    index++;
  }
  index--;
  return arr[index].slice();
}