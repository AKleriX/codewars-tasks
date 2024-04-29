const permutationShift = (permutation) => {
  const perShift = [];
  for (let i = 0; i < permutation.length; i++) perShift.push(permutation[i] - i);
  return Math.max.apply(Math, perShift) - Math.min.apply(Math, perShift);
};
