const brightest = (colors) =>
  colors
    .map((c, i) => [
      c,
      Math.max(parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5), 16)),
    ])
    .sort((a, b) => b[1] - a[1])[0][0];
