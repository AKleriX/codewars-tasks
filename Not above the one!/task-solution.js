const binaryCleaner = (arr) =>
  arr.reduce((res, n, i) => (res[n < 2 ? 0 : 1].push(n < 2 ? n : i), res), [[], []]);
