const blowCandles = (str) => {
  let c = [...str].map(Number),
    p = 0,
    m = 0;
  while (p < c.length) {
    if (c[p] > 0) {
      m++;
      c[p]--;
      if (c[p + 1] > 0) c[p + 1]--;
      if (c[p + 2] > 0) c[p + 2]--;
    } else p++;
  }
  return m;
};
