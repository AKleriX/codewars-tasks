function sortByValueAndIndex(array) {
  let numAndIdx = array.map((n, i) => [n, i + 1]);
  return numAndIdx.sort((a, b) => a[0] * a[1] - b[0] * b[1]).map((d) => d[0]);
}
