export function divisors(n: number): number {
  let counter: number = 0;
  for (let i: number = 0; i <= n / 2; i++)
    if (!(n % i)) counter++;
  return counter;
}