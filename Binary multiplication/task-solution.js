const binMul = (m, n) => {
  const res = [];

  if (!n) return res;

  if (m < n) [m, n] = [n, m];

  while (m > 0) {
    if (m % 2 !== 0) res.push(n);
    m = Math.floor(m / 2);
    n *= 2;
  }

  return res.reverse();
};
