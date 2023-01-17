function decode(code, n) {
  let digits = [...n.toString()].map(Number);
  return code.reduce((w, c, i) => w + String.fromCharCode(96 + c - digits[i % digits.length]), '');
}
