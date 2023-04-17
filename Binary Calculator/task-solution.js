function calculate(n1, n2, o) {
  const op = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
  };
  return op[o](parseInt(n1, 2), parseInt(n2, 2)).toString(2);
}
