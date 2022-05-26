const squares = (n) => Array.from({ length: n }, (_, i) => (i + 1) ** 2);

const range = (n, start, step) => Array.from({ length: n }, (_, i) => start + i * step);

const random = (n, min, max) => Array.from({ length: n }, (_) => getRandom(min, max));

const primes = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) arr.push(i ? getNextPrime(arr[i - 1]) : 2);
  return arr;
};

const getNextPrime = (lastPrime) => {
  let tmp = lastPrime + 1;
  while (!isPrime(tmp)) tmp++;
  return tmp;
};

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};

const getRandom = (min, max) => Math.round(Math.random() * (max - min)) + min;
