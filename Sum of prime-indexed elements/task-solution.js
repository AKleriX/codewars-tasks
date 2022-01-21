const total = (arr) => arr.reduce((sum, num, i) => isPrime(i) ? sum + num : sum, 0);

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (!(n % i)) return false;
  return n > 1;
}