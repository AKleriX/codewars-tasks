function digits(num) {
  let digits = [...num.toString()].map(Number),
    sums = [];
  for (let i = 0; i < digits.length - 1; i++)
    for (let j = i + 1; j < digits.length; j++) sums.push(digits[i] + digits[j]);
  return sums;
}
