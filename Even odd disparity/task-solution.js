const solve = (a) =>
  a.reduce((c, el) => (typeof el === 'number' ? (el % 2 ? c - 1 : c + 1) : c), 0);
