function countDigit(number, digit, base, fromBase) {
  let currentNum = parseInt(number, fromBase).toString(base);
  return currentNum.length - currentNum.replace(new RegExp(digit, 'g'), '').length;
}
