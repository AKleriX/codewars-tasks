const sumTimesTables = (tables, min, max) => {
  let midSum = (max - min + 1) * ((min + max) / 2);
  return tables.reduce((s, n) => s + midSum * n, 0);
};
