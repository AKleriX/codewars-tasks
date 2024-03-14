const reverseNumber = (n, b) => {
  if (b === 1n) return n;
  let c = 0n;
  while (n) {
    c = c * b + (n % b);
    n = (n / b) | 0n;
  }
  return c;
};
