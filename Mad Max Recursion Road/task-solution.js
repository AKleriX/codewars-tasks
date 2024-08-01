const max = (array) =>
  array.length
    ? array.length === 1
      ? array[0]
      : max(array.slice(1)) >= array[0]
      ? max(array.slice(1))
      : array[0]
    : -Infinity;
