const oddNotPrime = (n) => {
  let counter = 0;
  for (let i = 1; i <= n; i += 2) if (!isPrime(i)) counter++;
  return counter;
};

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
