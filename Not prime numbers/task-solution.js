function notPrimes(a, b) {
  let arr = [];
  for (let i = a; i < b; i++) if (/^[2357]+$/.test(i.toString()) && !isPrime(i)) arr.push(i);
  return arr;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
