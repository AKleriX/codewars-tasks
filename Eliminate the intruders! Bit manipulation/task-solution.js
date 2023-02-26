function eliminateUnsetBits(number) {
  let ones = number.replace(/0/g, '');
  return parseInt(ones.length ? ones : '0', 2);
}
