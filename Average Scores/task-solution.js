function average(scores) {
  return Math.round(scores.reduce((s, n) => s + n) / scores.length);
}
