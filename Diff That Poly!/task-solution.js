const diff = (poly) =>
  poly.length
    ? poly
        .slice(0, -1)
        .reverse()
        .map((n, i) => n * (i + 1))
        .reverse()
    : [];
