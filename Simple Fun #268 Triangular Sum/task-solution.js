const triangularSum = (n) => {
  let i = 1;
  while (triangular(i + 1) ** 2 + triangular(i) ** 2 <= n) {
    if (triangular(i + 1) ** 2 + triangular(i) ** 2 === n) return true;
    i++;
  }
  return false;
};

const isTriangularNumber = (n) => {
  let k = Math.floor(Math.sqrt(2 * n));
  return triangular(k) === n;
};

const triangular = (n) => (n * (n + 1)) / 2;
