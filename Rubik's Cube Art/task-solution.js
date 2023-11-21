const cube = (n) => {
  const up = [],
    down = [];
  for (let i = 1; i <= n; i++) {
    up.push(' '.repeat(n - i) + '/\\'.repeat(i) + '_\\'.repeat(n));
    down.unshift(' '.repeat(n - i) + '\\/'.repeat(i) + '_/'.repeat(n));
  }
  return up.concat(down).join('\n');
};
