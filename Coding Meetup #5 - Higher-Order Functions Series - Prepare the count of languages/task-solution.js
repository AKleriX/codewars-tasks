const countLanguages = (list) =>
  list.reduce((c, d) => ((c[d.language] = (c[d.language] || 0) + 1), c), {});
