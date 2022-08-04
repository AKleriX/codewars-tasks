function makeAWindow(n) {
  let lines = [];
  lines.push('-'.repeat(n * 2 + 3));
  for (let i = 0; i < n; i++) lines.push('|' + '.'.repeat(n) + '|' + '.'.repeat(n) + '|');
  lines.push('|' + '-'.repeat(n) + '+' + '-'.repeat(n) + '|');
  return lines.concat(lines.slice(0, -1).reverse()).join('\n');
}
