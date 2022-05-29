function addCheckDigit(number) {
  let sum = [...number].reverse().reduce((s, d, i) => s + +d * ((i % 6) + 2), 0);
  return number + (!(sum % 11) ? '0' : sum % 11 === 1 ? 'X' : 11 - (sum % 11));
}
