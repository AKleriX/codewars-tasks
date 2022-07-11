function twinPrime(n) {
  let primes = new Set([2, 3]),
    counter = 0;
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
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
