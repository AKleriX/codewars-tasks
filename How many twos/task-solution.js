const twoCount = (n) => {
  let counter = 0;
  while (!(n % 2)) {
    counter++;
    n /= 2;
  }
  return counter;
};
