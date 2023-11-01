const pattern = (n) => {
  const res = [];
  for (let i = 1; i <= n; i++)
    res.push(' '.repeat(i) + Array.from({ length: n - i + 1 }, (_) => i % 10).join(' '));
  return res.join('\n');
};
