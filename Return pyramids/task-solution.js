function pyramid(n) {
  let res = [];
  for (let i = 0; i < n - 1; i++) res.push(' '.repeat(n - 1 - i) + '/' + ' '.repeat(i * 2) + '\\');
  res.push('/' + '_'.repeat(n * 2 - 2) + '\\');
  return res.join('\n') + '\n';
}
