function closest(arr) {
  let sortedArr = Array.from(new Set(arr)).sort((a, b) => Math.abs(a) - Math.abs(b));
  return Math.abs(sortedArr[0]) === Math.abs(sortedArr[1]) ? null : sortedArr[0];
}
