function xMasTree(n) {
  const len = 2 * (n - 1) + 1;
  let res = [];

  for (let i = 0; i < n; i++)
    res.push('_'.repeat(n - 1 - i) + '#'.repeat(1 + 2 * i) + '_'.repeat(n - 1 - i));
  return res.concat(new Array(2).fill('_'.repeat(n - 1) + '#' + '_'.repeat(n - 1)));
}
