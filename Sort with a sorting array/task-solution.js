const sort = (initialArray, sortingArray) =>
  initialArray
    .map((el, i) => [el, sortingArray[i]])
    .sort((a, b) => a[1] - b[1])
    .map((a) => a[0]);
