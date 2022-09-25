const palindromeChainLength = function (n) {
  let stepCounter = 0;
  while (n.toString() !== [...n.toString()].reverse().join('')) {
    stepCounter++;
    n += +[...n.toString()].reverse().join('');
  }
  return stepCounter;
};
