function pattern(n) {
  const nums = '0123456789';
  let v = [],
    h = [];
  for (let i = 1; i < n; i++) {
    v.push(' '.repeat(n - 1) + nums[i % 10]);
    h.push(nums[i % 10]);
  }
  h = h.concat([nums[n % 10]], [...h].reverse());
  return v.join('\n') + '\n' + h.join('') + '\n' + v.reverse().join('\n') + '\n';
}
