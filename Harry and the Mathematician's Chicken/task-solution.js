const chickenOptions = (n) => {
  const res = [0];
  let c = 3;
  if (!Number.isInteger(n)) return res;
  while (c <= n) {
    if (c >= 18 || [3, 6, 9, 10, 12, 13, 15, 16].includes(c)) res.push(c);
    c++;
  }
  return res;
};
