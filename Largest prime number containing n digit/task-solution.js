const largest = (n) => {
  if (typeof n !== 'number' || n < 1) return false;
  let currentNum = +('9'.repeat(n - 1) + '7');
  while (!isPrime(currentNum)) currentNum--;
  return currentNum;
};

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
