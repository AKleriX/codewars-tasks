function rounders(value) {
  let counter = 0;
  while (value > 9) {
    value = Math.round(value / 10);
    counter++;
  }
  return value * 10 ** counter;
}
