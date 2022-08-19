function countSel(lst) {
  let counter = lst.reduce((c, n) => ((c[n] = (c[n] || 0) + 1), c), {}),
    uniqNums = Object.keys(counter).length,
    singleCount = Object.keys(counter).filter((num) => counter[num] === 1).length,
    maxCount = Math.max.apply(null, Object.values(counter)),
    maxNums = Object.keys(counter)
      .filter((num) => counter[num] === maxCount)
      .map(Number)
      .sort((a, b) => a - b);
  return [lst.length, uniqNums, singleCount, [maxNums, maxCount]];
}
