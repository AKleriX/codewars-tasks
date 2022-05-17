function hasTwoCubeSums(n) {
  let counter = new Set();
  for (let i = 1; i < Math.cbrt(n); i++)
    if (!(Math.cbrt(n - i ** 3) % 1)) counter.add(i, Math.cbrt(n - i ** 3));
  return counter.size > 3;
}
