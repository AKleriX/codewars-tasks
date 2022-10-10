function differenceOfSquares(n) {
  let sum = 0,
    sqSum = 0;
  for (let i = 1; i <= n; i++) [sum, sqSum] = [sum + i, sqSum + i ** 2];
  return sum ** 2 - sqSum;
}
