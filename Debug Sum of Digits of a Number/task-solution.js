function getSumOfDigits(integer) {
  let sum = null,
    digits = parseInt(integer).toString();
  for (let ix = 0; ix < digits.length; ix++) sum += +digits[ix];
  return sum;
}
