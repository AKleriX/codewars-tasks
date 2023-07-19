function sayMeOperations(str) {
  let nums = str.split(' ').map(Number);
  return nums
    .reduce(
      (o, n, i, arr) => (i < 2 ? o : (o.push(getOperation(arr[i - 2], arr[i - 1], n)), o)),
      [],
    )
    .join(', ');
}

const getOperation = (a, b, r) => {
  const op = {
    addition: (a, b) => a + b === r,
    subtraction: (a, b) => a - b === r,
    multiplication: (a, b) => a * b === r,
    division: (a, b) => (a / b) | (0 === r),
  };
  for (let o in op) if (op[o](a, b)) return o;
  return 'Wrong operation';
};
