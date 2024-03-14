const sc = (n) => {
  const bits = n.toString(2);
  let factors = [];
  for (let i = 1; i <= n; i++) if (!(n % i) && bits.indexOf(i.toString(2)) > -1) factors.push(i);
  return factors;
};
