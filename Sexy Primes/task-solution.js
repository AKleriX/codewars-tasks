const sexy_prime = (x, y) => Math.abs(x - y) === 6 && isPrime(x) && isPrime(y);

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
