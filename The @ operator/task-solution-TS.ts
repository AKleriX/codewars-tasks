export const evaluate = (equation: string) => {
  const vals: (number | null)[] = equation.replace(/\s/g, '').split('@').map(Number);
  return vals.slice(1).reduce((r, n) => (r === null || n === 0 ? null : getNewOp(r, n)), vals[0]);
};

const getNewOp = (a: number | null, b: number | null): number | null =>
  a === null || b === null ? null : a + b + (a - b) + a * b + ~~(a / b);
