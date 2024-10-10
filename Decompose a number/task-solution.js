const decompose = (num) => {
  let result = [],
    base = 2,
    power = 50;

  while (num > 0 && power > 1) {
    if (num < Math.pow(base, power)) power--;
    else {
      num -= Math.pow(base++, power);
      result.push(power);
    }
  }

  return [result, num];
};
