function sumTriangularNumbers(n) {
  let sum = 0,
    generalSum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    generalSum += sum;
  }
  return generalSum;
}
