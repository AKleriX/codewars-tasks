function wheatFromChaff(values) {
  let rightPointer = 0,
    leftPointer = values.length - 1,
    newArr = [...values];
  while (rightPointer < leftPointer) {
    while (newArr[rightPointer] < 0) rightPointer++;
    while (newArr[leftPointer] > 0) leftPointer--;
    if (rightPointer < leftPointer)
      [newArr[rightPointer], newArr[leftPointer]] = [newArr[leftPointer], newArr[rightPointer]];
  }
  return newArr;
}
