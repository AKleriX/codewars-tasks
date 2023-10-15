const evenator = (str) =>
  str
    .replace(/[.,!?_]/g, '')
    .split(' ')
    .map((w) => (w.length % 2 ? w + w.slice(-1) : w))
    .join(' ');
