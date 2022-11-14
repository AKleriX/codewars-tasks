export const isNice = (arr: number[]): boolean =>
  arr.length ? arr.every((n) => arr.includes(n - 1) || arr.includes(n + 1)) : false;
