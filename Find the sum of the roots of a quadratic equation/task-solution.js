function roots(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  return d < 0
    ? null
    : Math.round(((-b + Math.sqrt(d)) / (2 * a) + (-b - Math.sqrt(d)) / (2 * a)) * 100) / 100;
}
