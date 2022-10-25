function secDegSolver(a, b, c) {
  let d = 0;
  if (!a)
    return !b && !c
      ? 'The equation is indeterminate'
      : !b
      ? 'Impossible situation. Wrong entries'
      : `It is a first degree equation. Solution: ${
          !c ? 0.0 : Math.round((-c / b) * 10 ** 10) / 10 ** 10
        }`;
  d = b ** 2 - 4 * a * c;
  return d < 0
    ? 'There are no real solutions'
    : !d
    ? `It has one double solution: ${-b / (2 * a)}`
    : `Two solutions: ${Array.from(
        { length: 2 },
        (_, i) => Math.round(((-b + Math.sqrt(d) * (!i ? -1 : 1)) / (2 * a)) * 10 ** 10) / 10 ** 10,
      )
        .sort()
        .join(', ')}`;
}
