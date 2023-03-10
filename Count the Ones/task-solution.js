const hammingWeight = (x) => {
  let counter = 0;
  while (x > 1) {
    counter += x % 2;
    x = Math.floor(x / 2);
  }
  return counter + x;
};
