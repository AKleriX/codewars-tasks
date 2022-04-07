function sumDigNthTerm(initval, patternl, nthterm) {
  let pointer = 0,
    currentNum = initval,
    iterator = 2;
  while (iterator++ <= nthterm) {
    currentNum += patternl[pointer];
    pointer = pointer + 1 === patternl.length ? 0 : pointer + 1;
  }
  return [...currentNum.toString()].reduce((sum, digit) => sum + Number(digit), 0);
}
