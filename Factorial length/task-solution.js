const count = (n) => {
  if (!n || n === 1) return 1;

  let d = 0;
  for (let i = 1; i <= n; i++) d += Math.log10(i);

  return Math.floor(d) + 1;
};
