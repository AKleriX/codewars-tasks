const transform = (s) =>
  Object.entries([...s].reduce((c, s) => ((c[s] = (c[s] || 0) + 1), c), {})).reduce(
    (s, [l, n]) => s + l + (n > 1 ? n : ''),
    '',
  );
