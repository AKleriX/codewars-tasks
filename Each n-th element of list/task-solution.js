const each = (n, xs) => {
  if (n === 0) return [];
  if (n > 0) return xs.filter((_, i) => i % n === n - 1);
  if (n < 0)
    return xs
      .slice()
      .reverse()
      .filter((_, i) => i % Math.abs(n) === Math.abs(n) - 1);
};
