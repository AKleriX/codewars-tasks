const byteToSet = (byte) =>
  [...byte.toString(2).padStart(8, '0')].reduce(
    (s, b, i) => (b === '1' ? (s.add(i), s) : s),
    new Set(),
  );
