const maxProduct = (n, size) =>
  [...n]
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((p, n) => p * n);
