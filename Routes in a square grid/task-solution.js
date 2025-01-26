const routes = (n) => {
  if (n < 1) return 0;

  let result = 1;
  for (let i = 0; i < n; i++) result = (result * (2 * n - i)) / (i + 1);

  return result;
};
