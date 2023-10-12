const nextNumb = (val) => {
  let n = val + (val % 2 ? 2 : 1);

  while (n % 3 !== 0 || new Set([...n.toString()]).size !== n.toString().length) {
    n += 2;
    if (n >= 1000000000) return 'There is no possible number that fulfills those requirements';
  }

  return n;
};
