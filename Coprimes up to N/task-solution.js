function coprimes(n) {
  let arr = [];
  for (let i = 1; i < n; i++) if (gcd(n, i) === 1) arr.push(i);
  return arr;
}

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
