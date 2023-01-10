const rangeBitCount = (a, b) =>
  Array.from({ length: b - a + 1 }, (_, i) => (i + a).toString(2))
    .join('')
    .replace(/0/g, '').length;
