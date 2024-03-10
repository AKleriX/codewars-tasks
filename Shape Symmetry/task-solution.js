const symmetricShape = (shape, q) => [
  ...shape,
  ...shape.map((p) => [2 * q[0] - p[0], 2 * q[1] - p[1]]),
];
