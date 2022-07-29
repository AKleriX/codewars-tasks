function formula(n) {
  let sum = [],
    minus = false;
  if (n === 0) return '1';
  if (n < 0) {
    minus = true;
    n = -n;
  }
  for (let i = 0; i <= n; i++) {
    let c = binom(n, i).toString(),
      a = n - i,
      b = i;
    sum.push(
      (c !== '1' ? c : '') +
        (a > 0 ? (a === 1 ? 'a' : 'a^' + a) : '') +
        (b > 0 ? (b === 1 ? 'b' : 'b^' + b) : ''),
    );
  }
  return (minus ? '1/(' : '') + sum.join('+') + (minus ? ')' : '');
}

const binom = (n, k) => fact(BigInt(n)) / (fact(BigInt(k)) * fact(BigInt(n - k)));
const fact = (n) => (!n ? 1n : BigInt(n * fact(n - 1n)));
