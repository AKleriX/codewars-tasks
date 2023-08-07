const distribute = (m, n) => {
  let res = Array.from({ length: n < 0 ? 0 : n }, (_) => 0),
    c = m < 0 ? 0 : m,
    i = 0;
  while (c > 0) {
    res[i % res.length]++;
    i++;
    c--;
  }
  return res;
};
