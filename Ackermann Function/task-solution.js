Ackermann = function (m, n) {
  if (!m) return n + 1;
  if (!n) return Ackermann(m - 1, 1);
  return Ackermann(m - 1, Ackermann(m, n - 1));
};
