function last(x) {
  return x
    .split(' ')
    .map((w, i) => [w, i])
    .sort((a, b) =>
      a[0].slice(-1) === b[0].slice(-1)
        ? a[1] - b[1]
        : a[0].slice(-1).localeCompare(b[0].slice(-1)),
    )
    .map(([w, i]) => w);
}
