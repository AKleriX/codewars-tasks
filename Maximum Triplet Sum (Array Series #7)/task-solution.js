const maxTriSum = (n) =>
  Array.from(new Set(n))
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((s, n) => s + n);
