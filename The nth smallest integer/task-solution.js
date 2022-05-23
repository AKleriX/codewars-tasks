function nthSmallest(arr, n) {
  let uniqSortNums = Array.from(new Set(arr)).sort((a, b) => a - b);
  return n > uniqSortNums.length ? null : uniqSortNums[n - 1];
}
