export function sumMix(x: any[]): number {
  return x.length ? Number(x.reduce((sum, n) => +sum + +n)) : 0;
}
