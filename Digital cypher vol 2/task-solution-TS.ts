export function decode(code: number[], n: number): String {
  let digits: number[] = [...n.toString()].map(Number);
  return code.reduce((w, c, i) => w + String.fromCharCode(96 + c - digits[i % digits.length]), '');
}
