function regression_line(x, y) {
  let n = x.length,
    sumX = 0,
    sumY = 0,
    xy = 0,
    x2 = 0;
  for (let i = 0; i < x.length; i++) {
    sumX += x[i];
    sumY += y[i];
    xy += x[i] * y[i];
    x2 += x[i] ** 2;
  }
  return [
    +((x2 * sumY - sumX * xy) / (n * x2 - sumX ** 2)).toFixed(4),
    +((n * xy - sumX * sumY) / (n * x2 - sumX ** 2)).toFixed(4),
  ];
}
