const findAB = (numbers, c) => {
  let pair = null;
  for (let i = 0; i < numbers.length; i++) {
    let idx = numbers.indexOf(c / numbers[i], i + 1);
    if (idx > 0) {
      pair = [numbers[i], numbers[idx]];
      break;
    }
  }
  return pair;
};
