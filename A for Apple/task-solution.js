function a(n) {
  if (n < 4) return '';
  if (n % 2) n--;
  let rows = [];
  rows.push(' '.repeat(n - 1) + 'A' + ' '.repeat(n - 1));
  for (let i = 2; i <= n; i++) {
    let mid = Array.from({ length: 2 * n - 1 - (2 * (n - i) + 2) }, (_, idx) =>
      i === n / 2 + 1 && idx % 2 ? 'A' : ' ',
    );
    rows.push(' '.repeat(n - i) + 'A' + mid.join('') + 'A' + ' '.repeat(n - i));
  }
  return rows.join('\n');
}
