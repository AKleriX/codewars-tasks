function getW(n) {
  let wArr = [];
  if (n < 2) return wArr;
  wArr.push('*' + ' '.repeat(2 * n - 3) + '*' + ' '.repeat(2 * n - 3) + '*');
  for (let i = 1; i < n - 1; i++)
    wArr.push(
      ' '.repeat(i) +
        '*' +
        ' '.repeat(2 * n - 3 - 2 * i) +
        '*' +
        ' '.repeat(n + 3 * (n - 1) - (2 * (2 * n - 3 - 2 * i) + 4 + 2 * i)) +
        '*' +
        ' '.repeat(2 * n - 3 - 2 * i) +
        '*' +
        ' '.repeat(i),
    );
  wArr.push(' '.repeat(n - 1) + '*' + ' '.repeat(2 * n - 3) + '*' + ' '.repeat(n - 1));
  return wArr;
}
