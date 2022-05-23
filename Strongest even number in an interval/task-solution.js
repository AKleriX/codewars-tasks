function strongestEven(n, m) {
  let bestNum = 1,
    cel = Math.floor(n / bestNum) + (!(n % bestNum) ? 0 : 1),
    floor = Math.floor(m / bestNum);
  while (cel <= floor) {
    bestNum *= 2;
    (cel = Math.floor(n / bestNum) + (!(n % bestNum) ? 0 : 1)), (floor = Math.floor(m / bestNum));
  }
  return (bestNum / 2) * Math.floor(m / (bestNum / 2));
}
