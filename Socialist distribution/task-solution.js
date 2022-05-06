function socialistDistribution(population, minimum) {
  let popMin = [...population].map((n) => n - minimum),
    minNum = Math.min.apply(null, popMin);
  if (popMin.reduce((sum, n) => sum + n) < 0) return [];
  while (minNum < 0) {
    popMin[popMin.indexOf(Math.max.apply(null, popMin))]--;
    popMin[popMin.indexOf(minNum)]++;
    minNum = Math.min.apply(null, popMin);
  }
  return popMin.map((n) => n + minimum);
}
