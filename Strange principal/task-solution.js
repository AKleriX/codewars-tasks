const numOfOpenLockers = (n) => {
  let sq = 1,
    v = 1;
  while (sq <= n) sq = (++v) ** 2;
  return --v;
};
