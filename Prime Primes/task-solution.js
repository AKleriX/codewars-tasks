const primePrimes = (n) => {
  let count = 0,
    sum = 0;
  for (let i = 2; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (isPrime(i) && isPrime(j)) {
        count++;
        sum += i / j;
      }
  return [count, sum | 0];
};

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
