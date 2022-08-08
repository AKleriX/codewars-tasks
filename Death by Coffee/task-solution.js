const coffeeLimits = function (y, m, d) {
  const cafe = 51966,
    decaf = 912559;
  let hCaf = +('' + y + (m < 10 ? '0' + m : m) + (d < 10 ? '0' + d : d)),
    hDecaf = hCaf,
    res = [0, 0];
  for (let i = 1; i <= 5000; i++) {
    hCaf += cafe;
    hDecaf += decaf;
    if (res[0] === 0 && hCaf.toString(16).includes('dead')) res[0] = i;
    if (res[1] === 0 && hDecaf.toString(16).includes('dead')) res[1] = i;
  }
  return res;
};
