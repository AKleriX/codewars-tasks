export const houseNumbersSum = (arr: number[]): number =>
  arr.slice(0, arr.indexOf(0)).reduce((s, n) => s + n, 0);
