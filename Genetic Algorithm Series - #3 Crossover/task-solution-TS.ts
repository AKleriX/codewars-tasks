export const crossover = (chromosome1: string, chromosome2: string, index: number) => [
  chromosome1.slice(0, index) + chromosome2.slice(index),
  chromosome2.slice(0, index) + chromosome1.slice(index),
];
