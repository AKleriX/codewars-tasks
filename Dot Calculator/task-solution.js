function dotCalculator(equation) {
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '//': (a, b) => Math.floor(a / b),
  };
  let dots = equation.match(/\.+/g);
  return '.'.repeat(operators[equation.match(/-|\+|\*|\/\//)[0]](dots[0].length, dots[1].length));
}
