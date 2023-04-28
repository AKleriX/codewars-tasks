const calculate =
  (...args1) =>
  (...args2) =>
    args1.reduce(getSum, 0) + args2.reduce(getSum, 0);

const getSum = (sum, num) => sum + num;
