export function maxProduct(n: number[], size: number): number {
  return [...n]
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((p, n) => p * n);
}
