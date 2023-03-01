function cake(x, y) {
  let fallCandles = [...y].reduce((s, l, i) => s + l.charCodeAt(0) - (i % 2 ? 96 : 0), 0);
  return fallCandles / x > 0.7 ? 'Fire!' : 'That was close!';
}
