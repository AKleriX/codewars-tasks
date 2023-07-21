const SumSquares = (l) =>
  l.reduce((s, el) => s + (typeof el === 'number' ? el ** 2 : SumSquares(el)), 0);
