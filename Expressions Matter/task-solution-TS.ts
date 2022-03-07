export function expressionsMatter(a: number, b: number, c: number): number {
  let sumAndMul1: number = (a + b) * c,
    sumAndMul2: number = a * (b + c),
    sum: number = a + b + c,
    mul: number = a * b * c;
  return Math.max(sumAndMul1, sumAndMul2, sum, mul);
}
