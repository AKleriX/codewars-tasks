const sumtheDifference = (equation) => {
  equation = equation.replace(/\s+/g, '');
  let evenSum = 0,
    oddSum = 0;
  for (let i = 0; i < equation.length; i++) {
    if (/\d/.test(equation[i])) {
      const digit = parseInt(equation[i], 10),
        isNegative = equation[i - 1] === '-';
      if (!(digit % 2)) evenSum += isNegative ? -digit : digit;
      else oddSum += isNegative ? -digit : digit;
    }
  }
  return evenSum - oddSum;
};
