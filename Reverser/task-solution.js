function reverse(n) {
  let revNum = 0;
  while (n) {
    revNum += n % 10;
    revNum *= 10;
    n = Math.trunc(n / 10);
  }
  return revNum / 10;
}
