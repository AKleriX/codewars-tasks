export function easyLine(n: number): number {
  let squaresSum = 1;
  for (let i = 1; i <= n; i++) squaresSum *= (n + i) / i;
  return Math.round(Math.log(squaresSum));
}
