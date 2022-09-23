export function evenNumbers(array: number[], n: number): number[] {
  return array.filter((n) => !(n % 2)).slice(-1 * n);
}
