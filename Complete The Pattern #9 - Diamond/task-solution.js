function pattern(n) {
  if (n < 1) return '';
  const nums = '1234567890';
  let pattern = [],
    length = 2 * n - 1;
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 0; j <= i - 1; j++) row.push(nums[j % 10]);
    row = [...row, ...row.slice(0, row.length - 1).reverse()].join('');
    pattern.push(
      ' '.repeat((length - row.length) / 2) + row + ' '.repeat((length - row.length) / 2),
    );
  }
  return [...pattern, ...pattern.slice(0, pattern.length - 1).reverse()].join('\n');
}
