function withdraw(n) {
  let count = [0, 0, 0],
      amount = n % 100;
  if ((amount === 10 || amount === 30) && n > 100)
    count[0] = Math.trunc(n / 100) - 1;
  else count[0] = Math.trunc(n / 100);
  n -= count[0] * 100;
  amount = n % 50;
  if (n % 20 && n >= 50)
    count[1] = 1;
  n -= count[1] * 50;
  count[2] = n / 20;
  return count;
}