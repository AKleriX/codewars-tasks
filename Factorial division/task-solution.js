const factorialDivision = (n, d) => {
  let m = 1n;
  for (let i = d + 1n; i <= n; i++) m *= i;
  return m;
};
