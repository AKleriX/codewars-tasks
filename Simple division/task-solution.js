function solve(a, b) {
  if (a % b && isPrime(b)) return false;
  for (let i = 2; i <= Math.sqrt(b); i++) if (isPrime(i) && !(b % i) && a % i !== 0) return false;
  return true;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
