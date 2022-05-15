function totient(n) {
  let totient = n;
  if (typeof n !== 'number' || n !== parseInt(n) || n < 0) return 0;
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (!(n % i)) {
      while (!(n % i)) n /= i;
      totient *= 1 - 1 / i;
    }
  if (n > 1) totient *= 1 - 1 / n;
  return n === totient && isPrime(n) ? totient - 1 : Math.round(totient);
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
