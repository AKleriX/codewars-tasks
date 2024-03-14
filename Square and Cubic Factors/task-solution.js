const factors = (n) => {
  const sq = [],
    cb = [];
  let c = 1;
  while ((++c) ** 2 <= n) {
    if (!(n % c ** 2)) sq.push(c);
    if (!(n % c ** 3)) cb.push(c);
  }
  return [sq, cb];
};
