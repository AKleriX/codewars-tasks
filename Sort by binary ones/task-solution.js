function sortByBinaryOnes(list) {
  return list
    .map((n) => [n, [...n.toString(2)].filter((d) => d === '1').length, n.toString(2).length])
    .sort((a, b) => (a[1] === b[1] ? (a[2] === b[2] ? a[0] - b[0] : a[2] - b[2]) : b[1] - a[1]))
    .map((n) => n[0]);
}
