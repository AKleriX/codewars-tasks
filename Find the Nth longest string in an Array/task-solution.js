function longest(arr, n) {
  return arr
    .map((w, i) => [w, i])
    .sort((a, b) => (a[0].length === b[0].length ? a[1] - b[1] : b[0].length - a[0].length))[
    n - 1
  ][0];
}
