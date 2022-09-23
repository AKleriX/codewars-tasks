function halvingSum(n) {
  let sum = n;
  for (let i = 2; Math.floor(n / i) > 0; i *= 2) sum += Math.floor(n / i);
  return sum;
}
