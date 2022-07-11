export const twinPrime = (n: number): number => {
  let primes = new Set<number>([2, 3]),
    counter: number = 0;
  for (let i = 2; i < n; i++) {
    if (primes.has(i) || isPrime(i)) {
      primes.add(i);
      if (isPrime(i + 2)) {
        primes.add(i + 2);
        counter++;
      }
    }
  }
  return counter;
};

const isPrime = (n: number): boolean => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
