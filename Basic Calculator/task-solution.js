function calculate(num1, operation, num2) {
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (!b ? null : a / b),
  };
  return ops.hasOwnProperty(operation) ? ops[operation](num1, num2) : null;
}
