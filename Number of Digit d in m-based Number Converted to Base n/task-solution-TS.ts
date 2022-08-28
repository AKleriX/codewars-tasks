export function countDigit(number: string, digit: string, base: number, fromBase: number): number {
  return parseInt(number, fromBase).toString(base).split(digit).length - 1;
}
