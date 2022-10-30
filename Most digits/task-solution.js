const findLongest = (arr) =>
  arr.reduce((maxDigits, num) =>
    num.toString().length > maxDigits.toString().length ? num : maxDigits,
  );
