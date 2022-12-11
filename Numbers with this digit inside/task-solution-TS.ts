export function numbersWithDigitInside(x: number, d: number): number[] {
  let numsArr: number[] = Array.from({ length: x }, (_, i) => i + 1).filter((n) =>
    new RegExp(d.toString()).test(n.toString()),
  );
  return [
    numsArr.length,
    numsArr.reduce((s, n) => s + n, 0),
    numsArr.reduce((p, n) => (p || 1) * n, 0),
  ];
}
