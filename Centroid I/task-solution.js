const centroid = (c) =>
  [...c[0]].map((_, i) => +(c.reduce((s, n) => s + n[i], 0) / c.length).toFixed(2));
