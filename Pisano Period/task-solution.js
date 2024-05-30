const pisano = (n) => {
  let n1 = 1,
    n2 = 1 % n,
    c = 1;
  while (!(n1 === 0 && n2 === 1)) {
    c++;
    [n1, n2] = [n2, (n1 + n2) % n];
  }
  return c;
};
