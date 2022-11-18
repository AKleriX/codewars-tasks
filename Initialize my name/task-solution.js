const initializeNames = (name) =>
  name
    .split(' ')
    .map((n, i, arr) => (!i || i === arr.length - 1 ? n : n[0] + '.'))
    .join(' ');
