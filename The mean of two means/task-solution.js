const getMean = (arr, x, y) =>
  x < 2 || y > arr.length || x > arr.length || y < 2
    ? -1
    : (arr.slice(0, x).reduce((s, n) => s + n, 0) / x +
        arr.slice(-y).reduce((s, n) => s + n, 0) / y) /
      2;
