const sortedCommByDigs = (arr1, arr2) => {
  const set1 = new Set(arr1),
    set2 = new Set(arr2),
    common = [...set1].filter((x) => set2.has(x)),
    fMap = new Map();
  common.forEach((n) => fMap.set(n, f(n)));
  return common.sort((a, b) => fMap.get(b) - fMap.get(a) || a - b);
};

const f = (n) => {
  const dr = (n) =>
      String(n)
        .split('')
        .reduce((a, b) => a + +b, 0),
    dsddr = (n) =>
      String(dr(n))
        .split('')
        .reduce((a, b) => a + b * b, 0);
  return dr(n) + dsddr(n);
};
