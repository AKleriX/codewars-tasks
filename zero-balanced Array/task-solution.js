const ìsZeroBalanced = (n) =>
  n.length > 0 &&
  [...n].sort((a, b) => a - b).every((n, i, arr) => n === -1 * arr[arr.length - 1 - i]);
