const numberIncreasing = (n) => {
  while (n > 1) {
    if (n % 5 === 1) return true;
    if (!(n % 3)) n /= 3;
    else n -= 5;
  }
  return n === 1;
};
