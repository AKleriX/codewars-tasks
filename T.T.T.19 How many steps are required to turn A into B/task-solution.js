const howManyStep = (a, b) => {
  let steps = 0;
  while (b > a) {
    if (b % 2 === 0 && b / 2 >= a) b /= 2;
    else b -= 1;
    steps++;
  }
  return steps + (a - b);
};
