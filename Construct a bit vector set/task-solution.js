const sortByBit = (array) =>
  parseInt(
    new Array(32)
      .fill(0)
      .map((_, i) => (array.includes(i) ? 1 : 0))
      .reverse()
      .join(''),
    2,
  );
