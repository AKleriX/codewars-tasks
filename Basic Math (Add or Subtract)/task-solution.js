function calculate(str) {
  const funcs = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
  };
  let coms = str.match(/plus|minus/g) || [];
  return (str.match(/\d+/g) || [0])
    .reduce((res, val, i) => funcs[coms[i - 1]](+res, +val))
    .toString();
}
