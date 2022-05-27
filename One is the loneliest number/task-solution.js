function loneliest(number) {
  let minSum = number,
    minOne = number,
    digits = [...number.toString()].map(Number);
  for (let i = 0; i < digits.length; i++) {
    let sum =
      digits.slice(i - digits[i] < 0 ? 0 : i - digits[i], i).reduce((s, d) => d + s, 0) +
      digits.slice(i + 1, i + digits[i] + 1).reduce((s, d) => d + s, 0);
    minSum = minSum > sum ? sum : minSum;
    minOne = digits[i] === 1 && minOne > sum ? sum : minOne;
  }
  return digits.includes(1) && minOne === minSum;
}
