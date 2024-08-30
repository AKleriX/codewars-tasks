const toBcd = (n) => {
  const isNegative = n < 0,
    absNumber = Math.abs(n).toString();

  let bcd = absNumber
    .split('')
    .map((digit) => {
      return parseInt(digit).toString(2).padStart(4, '0');
    })
    .join(' ');

  return isNegative ? `-${bcd}` : bcd;
};
