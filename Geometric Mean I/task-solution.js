const geometricMeanI = (arr) => {
  const validEnt = arr.filter((v) => typeof v === 'number' && v >= 0);
  return arr.length - validEnt.length > 1
    ? 0
    : validEnt.reduce((p, n) => p * n, 1) ** (1 / validEnt.length);
};
