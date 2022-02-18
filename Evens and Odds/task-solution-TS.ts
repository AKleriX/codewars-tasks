export function evensAndOdds(n: number): string {
  return n.toString(n % 2 ? 16 : 2);
}
