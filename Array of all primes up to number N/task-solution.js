const primeArray = (n) => {
  const primeArray = [];
  for (let i = 2; i <= n; i++) if (isPrime(i)) primeArray.push(i);
  return primeArray;
};

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
