function isHollow(x) {
  let firstZeroIndex = x.indexOf(0),
    lastZeroIndex = x.lastIndexOf(0),
    middleNums = firstZeroIndex >= 0 ? x.slice(firstZeroIndex, lastZeroIndex + 1) : [];
  if (
    firstZeroIndex === x.length - lastZeroIndex - 1 &&
    middleNums.every((n) => n === 0) &&
    middleNums.length >= 3
  )
    return true;
  return false;
}
