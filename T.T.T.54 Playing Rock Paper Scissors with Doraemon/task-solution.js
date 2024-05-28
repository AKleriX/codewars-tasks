const game = (nobi) => {
  const n = nobi.reduce(getFnc('()'), 0);
  return [2 * nobi.reduce(getFnc('[]'), 0) + n, 2 * nobi.reduce(getFnc('8<'), 0) + n];
};

const getFnc = (s) => (c, el) => c + (el === s ? 1 : 0);
