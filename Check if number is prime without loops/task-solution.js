const isPrime = (n) => {
  n = Math.abs(n);
  if (n < 2) return false;
  const isDivisible = (d, max) => (d > max ? false : n % d === 0 || isDivisible(d + 1, max));
  return !isDivisible(2, Math.floor(Math.sqrt(n)));
};
