const isTwinPrime = (n) => isPrime(n) && (isPrime(n - 2) || isPrime(n + 2));

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
