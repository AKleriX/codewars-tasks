function pattern(n) {
  if (n < 1) return '';
  const digit = '1234567890';
  let resArr = [];
  for (let i = 0; i < n - 1; i++)
    resArr.push(
      ' '.repeat(i) + digit[i % 10] + ' '.repeat(2 * n - 3 - 2 * i) + digit[i % 10] + ' '.repeat(i),
    );
  return [
    ...resArr,
    ' '.repeat((2 * n - 2) / 2) + digit[(n - 1) % 10] + ' '.repeat((2 * n - 2) / 2),
    ...resArr.reverse(),
  ].join('\n');
}
