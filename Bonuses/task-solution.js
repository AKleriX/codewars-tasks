bonus = function(arr, s) {
  let sum = arr.reduce((s, d) => s + 1 / d, 0);
  return arr.map(d => Math.round(s / sum / d));
}