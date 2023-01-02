const sumFromString = (str) =>
  str
    .replace(/[^\d]+/g, ' ')
    .trim()
    .split(' ')
    .reduce((s, n) => s + +n, 0);
