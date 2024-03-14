const thatUnitesUs = (array1, array2, n) =>
  Array.from(new Set(array1.concat(array2)))
    .sort()
    .slice(0, n);
