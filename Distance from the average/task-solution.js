function distancesFromAverage(arr) {
  const avr = arr.reduce((s, n) => s + n, 0) / arr.length;
  return arr.map((n) => Math.round((avr - n) * 100) / 100);
}
