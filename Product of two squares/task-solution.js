const squareProduct = (n) => {
  let res = new Set(),
    sqrtN = Math.sqrt(n);
  for (let a = 1; a <= sqrtN; a++)
    if (n % (a * a) === 0) {
      let b = Math.sqrt(n / (a * a));
      if (Number.isInteger(b)) {
        let pair = [a, b].sort((x, y) => x - y);
        res.add(pair.toString());
      }
    }
  return [...res].map((e) => e.split(',').map(Number));
};
