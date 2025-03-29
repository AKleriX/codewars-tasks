const findUnique = (arr) => {
  const isFloat = (x) => !Number.isInteger(x),
    isInt = (x) => Number.isInteger(x),
    isPos = (x) => x > 0,
    isNeg = (x) => x < 0,
    isEven = (x) => isInt(x) && x % 2 === 0,
    isOdd = (x) => isInt(x) && Math.abs(x % 2) === 1;

  const getUnique = (fn) => {
    const map = arr.map(fn),
      counts = map.reduce((acc, v) => {
        acc[v] = (acc[v] || 0) + 1;
        return acc;
      }, {}),
      uniqueVal = Object.keys(counts).find((k) => counts[k] === 1);
    if (uniqueVal === undefined) return null;
    const idx = map.findIndex((v) => String(v) === uniqueVal);
    return arr[idx];
  };

  return getUnique(isFloat) ?? getUnique(isPos) ?? getUnique(isEven) ?? getUnique((x) => x);
};
