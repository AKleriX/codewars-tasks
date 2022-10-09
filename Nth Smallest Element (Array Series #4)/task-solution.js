const nthSmallest = (arr, pos) =>
  [...arr]
    .sort((a, b) => a - b)
    .slice(0, pos)
    .pop();
