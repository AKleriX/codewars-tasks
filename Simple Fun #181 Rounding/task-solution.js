const rounding = (n, m) => {
  if (n === m / 2 || n % m === m / 2) return n;
  return n < m / 2 ? 0 : n > m / 2 && n < m ? m : n % m > m / 2 ? n + (m - (n % m)) : n - (n % m);
};
