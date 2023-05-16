const dropCap = (n) =>
  n
    .split(' ')
    .map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(' ');
