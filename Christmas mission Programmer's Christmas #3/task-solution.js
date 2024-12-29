const merryChristmas = (s) => {
  const c = [
      ['C', 1],
      ['M', 1],
      ['a', 1],
      ['e', 1],
      ['h', 1],
      ['i', 1],
      ['m', 1],
      ['r', 3],
      ['s', 2],
      ['t', 1],
      ['y', 1],
    ],
    counter = c.map((e) => e[0]),
    t = Object.entries(
      [...s.replace(/[^MeryChistma]/g, '')].sort().reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
      }, {}),
    );

  if (!counter.every((e) => t.map((e) => e[0]).includes(e))) return 0;

  const r = [];
  for (let i = 0; i < c.length; i++) r.push(t[i][1] / c[i][1]);

  return r.map((e) => Math.floor(e)).sort((a, b) => a - b)[0];
};
