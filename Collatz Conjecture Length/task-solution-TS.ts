export function collatz(n: number): number {
  let counter: number = 1;
  while (n > 1) {
    if (n % 2) n = n * 3 + 1;
    else n /= 2;
    counter++;
  }
  return counter;
}
