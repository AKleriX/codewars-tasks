function collatz(n, count = 1) {
  if (n === 1) return count;
  n = !(n % 2) ? n / 2 : n * 3 + 1;
  return collatz(n, count + 1);
}
