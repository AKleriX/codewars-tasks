export function getExponent(n: number, p: number): null | number {
  let x: number = 0;
  if (p <= 1) return null;
  while (!(n % p ** x)) x++;
  return --x;
}
