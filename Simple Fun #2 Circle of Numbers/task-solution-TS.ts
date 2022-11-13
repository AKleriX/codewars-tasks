export const circleOfNumbers = (n: number, firstNumber: number) =>
  firstNumber + (n / 2) * (firstNumber >= n / 2 ? -1 : 1);
