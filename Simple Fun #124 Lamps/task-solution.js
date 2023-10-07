const lamps = (a) =>
  Math.min(
    ...a.reduce(
      (c, v, i) => [
        c[0] + ((!(i % 2) && v) || (i % 2 && !v)),
        c[1] + ((i % 2 && v) || (!(i % 2) && !v)),
      ],
      [0, 0],
    ),
  );
