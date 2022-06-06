function solve(n) {
  let firstNum = +'9'.repeat(n.toString().length - 1),
    secondNum = n - firstNum;
  return getDigitSum(firstNum) + getDigitSum(secondNum);
}

const getDigitSum = (n) => [...n.toString()].reduce((sum, d) => +d + sum, 0);
