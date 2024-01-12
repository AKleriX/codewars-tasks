const approxRoot = (n) => {
  const base = Math.floor(Math.sqrt(n)),
    difGn = n - base ** 2,
    difLg = Math.ceil(Math.sqrt(n)) ** 2 - base ** 2;
  return +(base + (difGn / difLg || 0)).toFixed(2);
};
