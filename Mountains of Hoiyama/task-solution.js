const mountainsOfHoiyama = (width) => {
  let sum = 0;
  for (let i = width, j = 0; i > j; i--, j++) {
    for (let k = 0; k < j; k++) sum += (i - 1 - k) * 2;
    sum += i;
  }
  return sum;
};
