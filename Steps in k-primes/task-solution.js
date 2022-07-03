function kprimesStep(k, step, start, nd) {
  let arr = [];
  for (let i = start; i <= nd - step; i++) {
    if (getKPrime(i) === k && getKPrime(i + step) === k) {
      arr.push([i, i + step]);
    }
  }
  return arr;
}

const getKPrime = (n) => {
  let k = 0;
  for (let i = 2; i <= Math.sqrt(n); i++)
    while (!(n % i)) {
      k++;
      n /= i;
    }
  return n > 1 ? k + 1 : k;
};
