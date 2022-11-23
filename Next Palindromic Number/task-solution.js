const nextPal = (val) => {
  let n = val + 1;
  while (n.toString() !== [...n.toString()].reverse().join('')) n++;
  return n;
};
