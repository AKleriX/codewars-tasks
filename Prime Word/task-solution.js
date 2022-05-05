function primeWord(arr) {
  return arr.map((a) =>
    [...a[0]].reduce((s, l) => (isPrime(l.charCodeAt() + a[1]) || s ? 1 : 0), 0),
  );
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
