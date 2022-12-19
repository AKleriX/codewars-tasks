const calculate = function calculate(a, o, b) {
  if (o === '+') return a + b;
  else if (o == '-') return a - b;
  else if (o === '/' && b !== 0) return a / b;
  if (o === '*') return a * b;
  return null;
};
