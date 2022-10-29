function seven(m) {
  let counter = 0;
  while (m > 99) {
    m = ((m / 10) | 0) - 2 * (m % 10);
    counter++;
  }
  return [m, counter];
}
