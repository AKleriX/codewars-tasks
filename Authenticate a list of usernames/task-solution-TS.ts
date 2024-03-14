export const authList = (arr: string[]): boolean =>
  arr.every((n: string): boolean => /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/.test(n));
