function countSpecMult(n, mxval) {
  let counter = 0,
    idx = 2,
    mul = 1;
  while (n) {
    if (isPrime(idx)) {
      mul *= idx;
      n--;
    }
    idx++;
  }
  return Math.trunc(mxval / mul);
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
