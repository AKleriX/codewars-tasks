const pressButton = (n) => {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, i) => acc + i + (i - 1) * (n - i),
    0,
  );
};
