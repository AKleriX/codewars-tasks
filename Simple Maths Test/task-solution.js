const numberProperty = (n) => [isPrime(n), !(n % 2), !(n % 10)];

const isPrime = (n) => {
  for (let i = 2; i < n / 2; i++) if (!(n % i)) return false;
  return n > 1;
};
