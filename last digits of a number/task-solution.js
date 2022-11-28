function lastDigit(n, d) {
  let digits = [];
  while (d > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
    d--;
    if (!n) break;
  }
  return digits.reverse();
}
