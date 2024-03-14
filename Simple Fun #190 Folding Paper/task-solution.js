const folding = (a, b) => {
  let counter = 0;
  while (a !== b && a > 0 && b > 0) {
    counter += (a / b) | 0;
    [a, b] = [b, a % b];
  }
  return counter + (a === b);
};
