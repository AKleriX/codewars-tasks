function isMadhavArray(arr, sum = arr[0], i = 2) {
  if (i === 2) arr = arr.slice(1);
  if (arr.length < i) return false;
  if (arr.length === i) return sum === arr.reduce((s, n) => s + n);
  return sum === arr.slice(0, i).reduce((s, n) => s + n)
    ? isMadhavArray(arr.slice(i), sum, i + 1)
    : false;
}
