const crossingSum = (matrix, a, b) =>
  matrix[a].reduce((s, n, i) => (i !== b ? s + n : s), 0) + matrix.reduce((s, r) => s + r[b], 0);
