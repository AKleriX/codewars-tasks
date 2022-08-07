function isPrimeHappy(n) {
  let sumOfPrimes = 0;
  for (let i = 2; i < n; i++) if (isPrime(i)) sumOfPrimes += i;
  return sumOfPrimes > 0 && !(sumOfPrimes % n);
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
