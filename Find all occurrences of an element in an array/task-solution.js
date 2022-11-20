const findAll = (array, n) =>
  array
    .map((n, i) => [n, i])
    .filter((d) => d[0] === n)
    .map((d) => d[1]);
