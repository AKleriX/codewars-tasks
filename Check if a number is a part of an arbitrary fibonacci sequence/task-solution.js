const isFibo = (a, b, f) => {
  while (b < f) [a, b] = [b, a + b];
  return b === f;
};
