function mod256WithoutMod(number) {
  let div = Math.pow(2, 8),
    absNum = Math.abs(number);
  while (absNum >= div) absNum -= div;
  return number > 0 ? absNum : absNum * -1;
}
