const scheme = (cmd) => {
  const c = cmd.slice(1, -1).split(' '),
    d = {
      '+': (a, b) => +a + +b,
      '-': (a, b) => a - b,
      '/': (a, b) => a / b,
      '*': (a, b) => a * b,
    };
  let r = c[1] || (c[0] === '*' ? 1 : 0);
  for (let i = 2; i < c.length; i++) r = d[c[0]](r, c[i]);
  return +r;
};
