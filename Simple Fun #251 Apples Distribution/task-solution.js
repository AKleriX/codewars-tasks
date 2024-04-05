const applesDistribution = (apples, boxCapacity, maxResidue) => {
  let counter = 1;
  for (let i = 2; i <= boxCapacity; i++) if (apples % i <= maxResidue) counter++;
  return counter;
};
