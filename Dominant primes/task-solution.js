function solve(a, b) {
  let primes = [],
    sum = 0;
  for (let i = 2; i <= b; i++) {
    if (isPrime(i)) {
      primes.push(i);
      if (i >= a && isPrime(primes.length)) sum += i;
    }
  }
  return sum;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
