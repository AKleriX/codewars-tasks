function reduce(fraction) {
  let maxNum = Math.max(...fraction);
  while (fraction[0] % maxNum || fraction[1] % maxNum) maxNum--;
  return [fraction[0] / maxNum, fraction[1] / maxNum];
}
