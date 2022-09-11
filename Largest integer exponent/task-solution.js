function getExponent(n, p) {
  let x = 0;
  if (p <= 1) return null;
  while (!(n % p ** x)) x++;
  return --x;
}
