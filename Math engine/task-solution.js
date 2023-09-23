const mathEngine = (arr) =>
  arr
    ? arr
        .reduce((c, n) => (n < 0 ? [c[0], c[1] + n] : [c[0] * n, c[1]]), [1, 0])
        .reduce((s, n) => s + n, 0)
    : 0;
