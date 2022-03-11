function sequenceSum(begin, end, step) {
  let totalNums = Math.floor((end - begin) / step) + 1;
  return totalNums <= 0 ? 0 : (totalNums / 2) * (2 * begin + (totalNums - 1) * step);
}
