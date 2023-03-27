const binaryPyramid = (m, n) =>
  Array.from({ length: n - m + 1 }, (_, i) => +(i + m).toString(2))
    .reduce((sum, n) => sum + n, 0)
    .toString(2);
