const solution = (n, b) => {
  const res = [],
    ones = new RegExp('^' + b.toString(2).replace(/0/g, '\\d') + '$'),
    strB = b.toString(2);
  if (b > 0)
    for (let i = b; i <= 2 ** n - 1; i++) {
      if (ones.test(i.toString(2).slice(-strB.length))) res.push(i);
    }
  return res;
};
