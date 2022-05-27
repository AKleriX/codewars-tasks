function zeroFill(number, size) {
  number = Math.abs(~~number); // whole positive integer
  let strNum = number.toString();
  return '0'.repeat(size - strNum.length > 0 ? size - strNum.length : 0) + strNum;
}
