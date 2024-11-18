const circleSlash = (n) => {
  let powerOfTwo = 1;
  while (powerOfTwo * 2 <= n) powerOfTwo *= 2;
  return 1 + (n - powerOfTwo) * 2;
};
