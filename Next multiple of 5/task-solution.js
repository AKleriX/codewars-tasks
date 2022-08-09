const nextMultipleOfFive = (n) => {
  const vars = ['0', '1', '01', '11', '011'];
  let bits = n.toString(2),
    sum = 0;
  for (let i = 0; i < vars.length; i++)
    if (!(parseInt(bits + vars[i], 2) % 5) && parseInt(bits + vars[i], 2) > 0)
      return parseInt(bits + vars[i], 2);
  return 5;
};
