const box = (n) => [
  '-'.repeat(n),
  ...Array.from({ length: n - 2 }, (_) => '-' + ' '.repeat(n - 2) + '-'),
  '-'.repeat(n),
];
