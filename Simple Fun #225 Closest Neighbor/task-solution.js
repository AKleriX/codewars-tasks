const closestNeighbor = (n, a, b, c) => {
  let below = Infinity,
    above = -Infinity;
  for (let i = n - 1; below === Infinity; i--) if (!(i % a) && !(i % b) && !(i % c)) below = i;
  for (let j = n + 1; above === -Infinity; j++) if (!(j % a) && !(j % b) && !(j % c)) above = j;
  return [below, above];
};
