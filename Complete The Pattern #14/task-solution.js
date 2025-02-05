function pattern(n, x = 1) {
  if (n < 1) return '';
  x = Math.max(x, 1);
  let basePattern = Array.from({ length: n }, (_, i) => {
    let row = Array(n * 2 - 1).fill(' ');
    row[i] = row[row.length - i - 1] = ((i + 1) % 10).toString();
    return row.join('');
  });
  let fullPattern = [...basePattern, ...basePattern.slice(0, -1).reverse()];
  return Array(x)
    .fill(fullPattern.slice(0, -1).join('\n'))
    .concat(fullPattern.slice(-1))
    .join('\n');
}
