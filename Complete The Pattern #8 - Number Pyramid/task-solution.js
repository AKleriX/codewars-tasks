function pattern(n) {
  const seq = '1234567890'.repeat(Math.ceil(Math.abs(n) / 10));
  return Array.from({ length: n }, (_, i) => {
    return (
      ' '.repeat(n - 1 - i) +
      seq.slice(0, i) +
      seq[i] +
      [...seq.slice(0, i)].reverse().join('') +
      ' '.repeat(n - 1 - i)
    );
  }).join('\n');
}
