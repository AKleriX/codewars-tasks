function per(n) {
  let currentNumber = n,
    res = [];
  while (currentNumber > 9) {
    currentNumber = +[...currentNumber.toString()].reduce((p, d) => p * +d, 1);
    res.push(currentNumber);
  }
  return res;
}
