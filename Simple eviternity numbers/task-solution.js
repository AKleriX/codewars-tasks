const solve = (a, b) => {
  let counter = 0;
  for (let i = a; i <= b; i++) {
    let strNum = i.toString();
    if (
      /^[358]+$/.test(i.toString()) &&
      strNum.split('8').length >= strNum.split('5').length &&
      strNum.split('5').length >= strNum.split('3').length
    )
      counter++;
  }
  return counter;
};
