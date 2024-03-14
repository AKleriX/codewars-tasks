const shortestDistance = (a, b, c) =>
  Math.min(
    (a ** 2 + (b + c) ** 2) ** (1 / 2),
    (b ** 2 + (a + c) ** 2) ** (1 / 2),
    (c ** 2 + (a + b) ** 2) ** (1 / 2),
  );
