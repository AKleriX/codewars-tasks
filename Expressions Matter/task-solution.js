function expressionMatter(a, b, c) {
  let sumAndMul1 = (a + b) * c,
    sumAndMul2 = a * (b + c),
    sum = a + b + c,
    mul = a * b * c;
  return Math.max(sumAndMul1, sumAndMul2, sum, mul);
}
