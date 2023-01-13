export function divisions(n: number, divisor: number): number {
  let count: number = 0;
  while (n >= divisor) {
    n = Math.floor(n / divisor);
    count++;
  }
  return count;
}
