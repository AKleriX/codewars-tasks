function primeProduct(n) {
  let maxMul = 0;
  for (let fN = 2, sN = n - 2; fN <= sN; fN++, sN--)
    if (isPrime(fN) && isPrime(sN) && maxMul < sN * fN) maxMul = fN * sN;
  return maxMul;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
