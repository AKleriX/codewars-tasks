const findTheMissingTree = (trees) =>
  +Object.entries(
    Object.entries(trees.reduce((c, s) => ((c[s] = (c[s] || 0) + 1), c), {})).reduce((c, p) => {
      if (c[p[1]]) c[p[1]].push(p[0]);
      else c[p[1]] = [p[0]];
      return c;
    }, {}),
  ).filter((p) => p[1].length === 1)[0][1][0];
