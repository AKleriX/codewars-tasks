export function predictAge(
  age1: number,
  age2: number,
  age3: number,
  age4: number,
  age5: number,
  age6: number,
  age7: number,
  age8: number,
): number {
  const ages: number[] = [...arguments];
  return (Math.sqrt(ages.reduce((s, a) => s + a * a, 0)) / 2) | 0;
}
