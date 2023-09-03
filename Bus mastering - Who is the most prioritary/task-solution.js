const arbitrate = (input, n) => {
  const firstOnePos = input.indexOf('1');
  return firstOnePos < 0 ? input : '0'.repeat(firstOnePos) + '1' + '0'.repeat(n - firstOnePos - 1);
};
