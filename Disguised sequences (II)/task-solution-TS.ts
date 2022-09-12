export function v1(n: number, p: number): number {
  let sum: number = 0;
  for (let i = 0; i <= n; i++) sum += (-1) ** i * p * 4 ** (n - i) * binom(2 * n - i, i);
  return sum | 0;
}

export function u1(n: number, p: number): number {
  let sum: number = 0;
  for (let i = 0; i <= n; i++) sum += (-1) ** i * p * 4 ** (n - i) * binom(2 * n - i + 1, i);
  return sum | 0;
}

const fact = (n: number): number => (!n ? 1 : n * fact(n - 1));

const binom = (n: number, k: number): number => fact(n) / (fact(k) * fact(n - k));
