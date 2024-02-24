const getNumberLength = (n) =>
  typeof n !== 'number' || n < 10 ** 21
    ? 'wrong input'
    : 1 + +n.toString().slice(n.toString().indexOf('e') + 1);
