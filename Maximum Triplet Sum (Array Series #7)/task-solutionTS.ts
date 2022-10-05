export function maxTriSum(n: number[]): number {
  return Array.from(new Set(n))
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((s, n) => s + n);
}
