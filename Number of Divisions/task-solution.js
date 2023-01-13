const divisions = (n, divisor) => {
  let count = 0;
  while (n >= divisor) {
    n = Math.floor(n / divisor);
    count++;
  }
  return count;
};
