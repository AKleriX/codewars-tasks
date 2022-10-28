const findDigit = (num, nth) =>
  nth < 1
    ? -1
    : nth > Math.abs(num).toString().length
    ? 0
    : +[...Math.abs(num).toString()].reverse()[nth - 1];
