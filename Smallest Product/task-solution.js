const smallestProduct = (arr) =>
  Math.min.apply(
    Math,
    arr.map((a) => a.reduce((p, n) => p * n, 1)),
  );
