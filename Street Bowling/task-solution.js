const ballTest = (s, r) => {
  let c = 0,
    cR = [...r];
  while (s > 0 && s < cR.length) {
    c = cR.slice(0, s).filter((v) => v === 'x').length;
    cR = cR.slice(s);
    s -= c + 1;
  }
  return s >= cR.length;
};
