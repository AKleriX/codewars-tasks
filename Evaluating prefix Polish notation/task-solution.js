function calculate(expression) {
  const ariph = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };
  let ex = expression + '';
  while (ex.includes(' '))
    ex = ex
      .replace(/([*+/\-])\s+(-?[\d.]+[e\-+\d]*)\s+(-?[\d.]+[e\-+\d]*)/g, (_, s, p1, p2) =>
        ariph[s](+p1, +p2),
      )
      .trim();
  return +ex;
}
