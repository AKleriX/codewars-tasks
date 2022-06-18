function countZeros(n) {
  if (n % 2 === 1) return 0;
  let zeroCount = 0;
  n /= 2;
  while (n > 0) {
    n = Math.floor(n / 5);
    zeroCount += n;
  }
  return zeroCount;
}
