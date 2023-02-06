export function singleDigit(n: number): number {
  while (n > 9) n = [...n.toString(2)].reduce((s: number, d: string): number => s + +d, 0);
  return n;
}
