function stickyCalc(operation, val1, val2) {
  const func = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };
  return Math.round(
    func[operation](+(Math.round(val1).toString() + Math.round(val2).toString()), Math.round(val2)),
  );
}
