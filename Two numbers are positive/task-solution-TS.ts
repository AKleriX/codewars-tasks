export const twoArePositive = (a: number, b: number, c: number): boolean =>
  [a, b, c].filter((n) => n > 0).length === 2;
