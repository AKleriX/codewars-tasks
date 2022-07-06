function sortArrays(arr1, arr2) {
  let patternArr1 = [...arr1]
      .map((n, i) => [n, i])
      .sort(ascendingSort)
      .map((a) => a[1]),
    patternArr2 = [...arr2]
      .map((n, i) => [n, i])
      .sort(ascendingSort)
      .map((a) => a[1]);
  return [
    [...arr1].map((_, i, arr) => arr[patternArr2[i]]),
    [...arr2].map((_, i, arr) => arr[patternArr1[i]]),
  ];
}

const ascendingSort = (a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
