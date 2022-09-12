function v1(n, p) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += (-1) ** i * p * 4 ** (n - i) * binom(2 * n - i, i);
  return sum | 0;
}
function u1(n, p) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += (-1) ** i * p * 4 ** (n - i) * binom(2 * n - i + 1, i);
  return sum | 0;
}

const fact = (n) => (!n ? 1 : n * fact(n - 1));

const binom = (n, k) => fact(n) / (fact(k) * fact(n - k));
