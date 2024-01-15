const primes = (start, end) => {
  const primes = [];

  for (let i = start; i <= end; i++) if (isPrime(i)) primes.push(i);

  return primes.length ? primes : null;
};

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;

  return n > 1;
};
