function dot(n, m) {
  let evenRow = '+' + Array(n).fill('---').join('+') + '+',
    oddRow = '|' + Array(n).fill(' o ').join('|') + '|';
  return (
    evenRow +
    '\n' +
    Array(m)
      .fill(oddRow)
      .join('\n' + evenRow + '\n') +
    '\n' +
    evenRow
  );
}
