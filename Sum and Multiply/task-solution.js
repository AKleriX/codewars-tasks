const sumAndMultiply = function (sum, multiply) {
  let d = sum ** 2 - 4 * multiply;
  let x = (sum - Math.sqrt(d)) / 2,
    y = Math.abs(x - sum);
  if (d < 0 || x % 1 || y % 1) return null;
  return [x, y];
};
