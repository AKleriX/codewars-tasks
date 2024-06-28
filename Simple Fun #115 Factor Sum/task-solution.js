const factorSum = (n) => {
  const pF = (num) => {
    const fac = [];
    let div = 2;
    while (num > 1) {
      while (num % div === 0) {
        fac.push(div);
        num /= div;
      }
      div++;
    }
    return fac;
  };

  let sum = pF(n).reduce((acc, val) => acc + val, 0);

  while (sum !== n) {
    n = sum;
    sum = pF(n).reduce((acc, val) => acc + val, 0);
  }

  return n;
};
