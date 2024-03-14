const closestPairTonum = (n) => {
  for (let i = n - 1; i > 1; i--)
    for (let j = i - 1; j > 0; j--)
      if (!(Math.sqrt(i + j) % 1) && !(Math.sqrt(i - j) % 1)) return [i, j];
  return false;
};
