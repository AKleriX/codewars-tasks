function pattern(n) {
  if (n < 1) return '';
  let start = [],
    nums = '0123456789',
    middle = '';
  for (let i = 1; i < n; i++) {
    start.push(' '.repeat(n - 1) + nums[i % 10].repeat(n) + ' '.repeat(n - 1));
    middle += nums[i % 10];
  }
  middle = middle + nums[n % 10].repeat(n) + [...middle].reverse().join('');
  return start.join('\n') + ('\n' + middle).repeat(n) + '\n' + start.reverse().join('\n');
}
