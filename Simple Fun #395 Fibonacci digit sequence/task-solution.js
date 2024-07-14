const find = (a, b, n) => {
  let c = +[...n.toString()].slice(-4).join(''),
    s = `${a}${b}`;

  while (s.length <= c) s += +s[s.length - 2] + +s[s.length - 1];

  return +s[c];
};
