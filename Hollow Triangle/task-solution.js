function hollowTriangle(n) {
  const rowLen = n * 2 - 1,
    rows = ['_'.repeat((rowLen - 1) / 2) + '#' + '_'.repeat((rowLen - 1) / 2)];
  for (let i = 1; i < n - 1; i++)
    rows.push(
      '_'.repeat(n - i - 1) + '#' + '_'.repeat(2 * (i - 1) + 1) + '#' + '_'.repeat(n - i - 1),
    );
  if (n > 1) rows.push('#'.repeat(rowLen));
  return rows;
}
