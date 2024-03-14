const sign = (n) => {
  if (Array.isArray(n)) {
    if (n.length === 1) return getSign(n[0]);
    return NaN;
  }
  return getSign(n);
};

const getSign = (n) => (isNaN(+n) ? NaN : +n > 0 ? 1 : +n < 0 ? -1 : 0);
