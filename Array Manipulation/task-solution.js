function arrayManip(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let min = Math.min(...array.slice(i + 1).filter((n) => array[i] < n));
    res.push(min !== Infinity ? min : -1);
  }
  return res;
}
