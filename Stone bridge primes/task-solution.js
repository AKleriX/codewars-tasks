const solve = (x, y) => {
  const primes = new Set();
  for (let m = 0; 2 ** m < y; m++)
    for (let n = 0; 2 ** m * 3 ** n + 1 < y; n++) {
      const p = 2 ** m * 3 ** n + 1;
      if (p >= x && p < y && isPrime(p)) primes.add(p);
    }
  return primes.size;
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
  return true;
};
