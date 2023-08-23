const move_zeros = (arrNum, isRight = true) => {
  const removedZeros = arrNum.filter((n) => n);
  return isRight
    ? [...removedZeros, ...new Array(arrNum.length - removedZeros.length).fill(0)]
    : [...new Array(arrNum.length - removedZeros.length).fill(0), ...removedZeros];
};
