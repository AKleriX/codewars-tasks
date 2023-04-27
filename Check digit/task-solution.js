const checkDigit = (number, index1, index2, digit) =>
  number
    .toString()
    .slice(Math.min(index1, index2), Math.max(index1, index2) + 1)
    .includes(digit.toString());
