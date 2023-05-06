function pattern(n) {
  let output = '';
  for (let i = 2; i <= n; i += 2) output += i.toString().repeat(i) + '\n';
  return output.trim();
}
