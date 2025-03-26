const mulPower = (n, k) => {
  n = BigInt(n);
  k = BigInt(k);

  const factorize = (n) => {
    const factors = new Map();
    let d = 2n;
    while (d * d <= n) {
      while (n % d === 0n) {
        factors.set(d, (factors.get(d) || 0n) + 1n);
        n /= d;
      }
      d++;
    }
    if (n > 1n) factors.set(n, 1n);
    return factors;
  };

  const factors = factorize(n);
  let res = 1n;
  for (let [p, e] of factors.entries()) {
    let add = (k - (e % k)) % k;
    res *= p ** add;
  }
  return res;
};
