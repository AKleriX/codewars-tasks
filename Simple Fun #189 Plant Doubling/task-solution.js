function plantDoubling(n) {
  let counter = 0;
  while (n) {
    if (n % 2) {
      counter++;
      n--;
    } else {
      for (let i = 1; i <= n; i *= 2) if (i * 2 > n) n -= i;
      counter++;
    }
  }
  return counter;
}
