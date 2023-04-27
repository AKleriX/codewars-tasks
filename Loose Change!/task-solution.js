const changeCount = (change) =>
  `\$${change
    .split(' ')
    .reduce((sum, v) => sum + CHANGE[v], 0)
    .toFixed(2)}`;
