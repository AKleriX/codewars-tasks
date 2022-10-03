const strong = (n) =>
  n === [...n.toString()].reduce((s, d) => s + fact(+d), 0) ? 'STRONG!!!!' : 'Not Strong !!';

const fact = (n) => (n < 2 ? 1 : n * fact(n - 1));
