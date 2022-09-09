export function find(rats: number[]): number {
  return rats.reduce((s, n) => s + 2 ** n, 0);
}
