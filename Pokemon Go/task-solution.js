const pidgeyCalc = (pidgeys, candy) => {
  let exp = 0;
  while (pidgeys) {
    if (candy < 12) {
      pidgeys--;
      candy++;
    } else {
      candy -= 11;
      pidgeys--;
      exp += 500;
    }
  }
  return exp;
};
