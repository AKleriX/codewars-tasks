const crossover = (chromosome1, chromosome2, index) => [
  chromosome1.slice(0, index) + chromosome2.slice(index),
  chromosome2.slice(0, index) + chromosome1.slice(index),
];
