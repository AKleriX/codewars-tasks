function pattern(n) {
  let arr = ['1'];
  for (let i = 2; i <= n; i++) arr.push('1' + '*'.repeat(i - 1) + i);
  return arr.join('\n');
}
