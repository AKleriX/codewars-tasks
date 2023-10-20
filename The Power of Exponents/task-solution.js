const power = (base, exponent) => {
  let res = 1;
  for (let i = 1; i <= Math.abs(exponent); i++) res *= base;
  return exponent < 0 ? 1 / res : res;
};
