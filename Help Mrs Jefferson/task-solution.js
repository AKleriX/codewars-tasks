function shortestArrang(n) {
  if (n % 2) return [(n + 1) / 2, (n - 1) / 2];
  let min = n / 2 - 2,
    max = n / 2,
    sum = min + max + 1;
  while (n !== sum) {
    if (sum > n) {
      sum -= max;
      max--;
    } else {
      sum += min;
      min--;
    }
    if (min < 0) return [-1];
  }
  return Array.from({ length: max - min }, (_, i) => max - i);
}
