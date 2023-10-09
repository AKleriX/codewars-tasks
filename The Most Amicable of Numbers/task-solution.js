const amicableNumbers = (num1, num2) =>
  getDiv(num1).reduce(getSum, 0) === num2 && getDiv(num2).reduce(getSum, 0) === num1;

const getDiv = (n) => {
  const res = [];
  for (let i = 0; i <= n / 2; i++) if (!(n % i)) res.push(i);
  return res;
};

const getSum = (s, n) => s + n;
