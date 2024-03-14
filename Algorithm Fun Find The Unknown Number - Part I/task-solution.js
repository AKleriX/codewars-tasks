const findUnknowNumber = (x, y, z) => {
  let n = x || 1;
  while (n % 3 !== x || n % 5 !== y || n % 7 !== z) n++;
  return n;
};
