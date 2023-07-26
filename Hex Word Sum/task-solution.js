const hexWordSum = (string) =>
  string
    .split(' ')
    .map((w) => w.replace(/[OS]/g, (l) => (l === 'O' ? 0 : 5)))
    .reduce((s, n) => s + (/^[A-F05]+$/.test(n) ? parseInt(n, 16) : 0), 0);
