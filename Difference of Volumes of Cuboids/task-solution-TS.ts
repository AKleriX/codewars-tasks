export const findDifference = (a: [number, number, number], b: [number, number, number]): number =>
  Math.abs(a.reduce((v, n) => v * n) - b.reduce((v, n) => v * n));
