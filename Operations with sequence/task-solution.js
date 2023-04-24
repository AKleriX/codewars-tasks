const calc = (a) =>
  a.reduce(
    (s, n, i) => s + n * (n > 0 ? n : 1) * ((i + 1) % 3 ? 1 : 3) * ((i + 1) % 5 ? 1 : -1),
    0,
  );
