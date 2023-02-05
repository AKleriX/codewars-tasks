const initials = (n) =>
  n
    .split(' ')
    .map((n, i, w) => n[0].toUpperCase() + n.slice(i === w.length - 1 ? 1 : n.length))
    .join('.');
