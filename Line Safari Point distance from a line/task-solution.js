const distanceFromLine = (a, b, c) => {
  if (a[0] === b[0] && a[1] === b[1])
    return Math.sqrt(Math.pow(a[0] - c[0], 2) + Math.pow(a[1] - c[1], 2));

  const numerator = Math.abs(
      (b[1] - a[1]) * c[0] - (b[0] - a[0]) * c[1] + b[0] * a[1] - b[1] * a[0],
    ),
    denominator = Math.sqrt(Math.pow(b[1] - a[1], 2) + Math.pow(b[0] - a[0], 2));

  return numerator / denominator;
};
