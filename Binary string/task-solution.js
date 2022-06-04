function toBinaryString(number) {
  let bits = [];
  while (number > 1) {
    bits.push(number % 2);
    number = Math.trunc(number / 2);
  }
  bits.push(number);
  return bits
    .reverse()
    .join('')
    .replace(bits.length > 1 ? /^0+/ : '', '');
}
