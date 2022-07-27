function markSpot(n) {
  let pattern = [];
  for (let i = 0; i < Math.ceil(n / 2); i++)
    if (4 * i + 1 === 2 * n - 1) pattern.push(' '.repeat(2 * i) + 'X');
    else pattern.push(' '.repeat(2 * i) + 'X' + ' '.repeat(2 * n - 3 - 4 * i) + 'X');
  return Number(n) === n && n > 0 && n % 2
    ? pattern.concat(pattern.slice(0, -1).reverse()).join('\n') + '\n'
    : '?';
}
