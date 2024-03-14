const findWaldo = (crowd) => {
  const dict = crowd.reduce(
    (d, r, i) => ([...r].forEach((e, j) => (d[e] = d[e] ? [d[e][0] + 1, i, j] : [1, i, j])), d),
    {},
  );
  return Object.values(dict)
    .filter((a) => a[0] === 1)[0]
    .slice(1);
};
