function goldbachPartitions(n) {
  let pairs = [],
    primes = new Set();
  if (n % 2) return pairs;
  for (let i = 2; i <= n / 2; i++) {
    if ((primes.has(i) || isPrime(i)) && (primes.has(n - i) || isPrime(n - i))) {
      primes.add(i, n - i);
      pairs.push(i + '+' + (n - i));
    }
  }
  return pairs;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
