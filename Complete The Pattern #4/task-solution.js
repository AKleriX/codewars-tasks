function pattern(n) {
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  let rows = '';
  for (let i = 0; i < n; i++) rows += nums.slice(i).join('') + '\n';
  return rows.slice(0, -1);
}
