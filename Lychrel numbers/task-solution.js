const howManyIterationsNeeded = (num, m = 25) => {
  let counter = 1;
  while (counter <= m) {
    num += +[...num.toString()].reverse().join('');
    if (num === +[...num.toString()].reverse().join('')) return counter;
    counter++;
  }
  return null;
};
