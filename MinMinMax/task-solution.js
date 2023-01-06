function minMinMax(array) {
  let smallest = Math.min.apply(Math, array),
    largest = Math.max.apply(Math, array),
    minAbs = null;
  for (let i = smallest + 1; i < largest; i++)
    if (!array.includes(i)) {
      minAbs = i;
      break;
    }
  return [smallest, minAbs, largest];
}
