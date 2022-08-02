const closestSum = (ints, num) => {
  let bestSum = null,
    bestDif = Infinity;
  for (let i = 0; i < ints.length - 2; i++)
    for (let j = i + 1; j < ints.length - 1; j++)
      for (let k = j + 1; k < ints.length; k++)
        if (
          Math.abs(ints[i] + ints[j] + ints[k] - num) < bestDif ||
          (Math.abs(ints[i] + ints[j] + ints[k] - num) === bestDif &&
            ints[i] + ints[j] + ints[k] < bestSum)
        ) {
          bestDif = Math.abs(ints[i] + ints[j] + ints[k] - num);
          bestSum = ints[i] + ints[j] + ints[k];
        }
  return bestSum;
};
