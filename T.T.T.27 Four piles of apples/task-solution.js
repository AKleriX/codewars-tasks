const fourPiles = (n, y) => {
  let x = y + 1;
  while (x <= n) {
    if (x + y + (x - y) + x * y + x / y === n) return [x + y, x - y, x * y, x / y];
    x++;
  }
  return [];
};
