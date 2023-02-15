const strangeMath = (n, k) =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
    .concat(Array.from({ length: n - 10 + 1 }, (_, i) => 10 + i))
    .sort()
    .indexOf(k) + 1;
