export class Kata {
  static findLongest(array: number[]): number {
    return +array.reduce(
      (maxDigits, num) => (num.toString().length > maxDigits.length ? num.toString() : maxDigits),
      '',
    );
  }
}
