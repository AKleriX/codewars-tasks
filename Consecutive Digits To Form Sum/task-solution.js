function consecutiveDucks(num) {
  while (!(num % 2)) num /= 2;
  return num > 1;
}
