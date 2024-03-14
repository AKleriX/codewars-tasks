const compute = (n) => {
  if (!(n % 2) || n < 3) return 0;
  let c = 0;
  for (let i = 1; i <= n; i += 2) c += 1 / Math.pow(i, 2);
  return c;
};
