const select = (population, fitnesses) => {
  const rnd = Math.random();
  let selectPoint = null;
  for (let i = 0; i < fitnesses.length; i++)
    if (fitnesses[i] > rnd) {
      selectPoint = population[i];
      break;
    }
  return selectPoint;
};
