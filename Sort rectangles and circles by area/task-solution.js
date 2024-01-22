const sortByArea = (array) =>
  array
    .map((el) =>
      Array.isArray(el) ? +(el[0] * el[1]).toFixed(2) : +(el ** 2 * Math.PI).toFixed(2),
    )
    .sort((a, b) => a - b);
