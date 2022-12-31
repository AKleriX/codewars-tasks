const testit = (a, b) =>
  Array.from(new Set(a))
    .concat(Array.from(new Set(b)))
    .sort((a, b) => a - b);
