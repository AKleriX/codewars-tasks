function minPermutation(n) {
  let sign = n < 0 ? -1 : 1,
    absN = Math.abs(n),
    digits = Number([...absN.toString()].sort((a, b) => Number(a) - Number(b)).join(''));
  if (digits.toString().length < absN.toString().length)
    digits = Number(
      digits.toString()[0] +
        '0'.repeat(absN.toString().length - digits.toString().length) +
        digits.toString().slice(1),
    );
  return digits * sign;
}
