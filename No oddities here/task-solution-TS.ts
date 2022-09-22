export function noOdds(values: number[]): number[] {
  return values.filter((n) => !(n % 2));
}
