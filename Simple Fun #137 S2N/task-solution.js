const S2N = (m, n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) for (let j = 0; j <= m; j++) sum += j ** i;
  return sum;
};
