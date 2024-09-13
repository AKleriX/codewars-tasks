const multiply = (n, l) => {
  const add = (a, b) => (b === 0 ? 0 : b > 0 ? a + add(a, b - 1) : -add(a, -b));

  return l.map((x) => add(x, n));
};
