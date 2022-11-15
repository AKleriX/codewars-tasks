function duplicates(array) {
  let nums = array.reduce((c, n) => ((c[n] = (c[n] || 0) + 1), c), {});
  return Object.values(nums).reduce((p, c) => p + Math.floor(c / 2), 0);
}
