function consecutive(arr) {
  let minNum = Math.min.apply(Math, arr) || 0,
    maxNum = Math.max.apply(Math, arr) || 0;
  return arr.length ? maxNum - minNum + 1 - arr.length : 0;
}
