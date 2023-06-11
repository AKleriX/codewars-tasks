const mapPopulationFit = (population, fitness) =>
  population.map((c) => ({ chromosome: c, fitness: fitness(c) }));
