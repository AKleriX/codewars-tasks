const drawACross = (n) => {
  if (n < 3) return 'Not possible to draw cross for grids less than 3x3!';
  if (!(n % 2)) return 'Centered cross not possible!';
  let rows = [];
  for (let i = 0; i < ((n / 2) | 0); i++)
    rows.push(' '.repeat(i) + 'x' + ' '.repeat(n - 2 * i - 2) + 'x' + ' '.repeat(i));
  rows.push(' '.repeat((n / 2) | 0) + 'x' + ' '.repeat((n / 2) | 0));
  rows = rows.concat(rows.slice(0, -1).reverse());
  return rows.join('\n');
};
