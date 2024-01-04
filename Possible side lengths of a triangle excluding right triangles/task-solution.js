const sideLen = (x, y) =>
  Array.from({ length: 2 * x - 1 }, (_, i) => i + 1 + y - x).filter(
    (c) => x ** 2 + Math.min(y, c) ** 2 !== Math.max(y, c) ** 2,
  );
