const pattern = (n) => {
  const patternArr = [];
  for (let i = 0; i < n; i++)
    patternArr.push(
      ' '.repeat(2 * n - 1 - n - i) +
        Array.from({ length: n }, (_, i) => (i + 1) % 10).join('') +
        ' '.repeat(i),
    );
  return patternArr.join('\n');
};
