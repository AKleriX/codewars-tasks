function solve(n) {
  for (let i = 1; i < n; i++) if (!(Math.sqrt(n + i ** 2) % 1)) return i ** 2;
  return -1;
}
