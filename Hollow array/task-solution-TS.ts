export class Kata {
  static isHollow(x: number[]) {
    let firstZeroIndex: number = x.indexOf(0),
      lastZeroIndex: number = x.lastIndexOf(0),
      middleNums: number[] = firstZeroIndex >= 0 ? x.slice(firstZeroIndex, lastZeroIndex + 1) : [];
    return (
      firstZeroIndex === x.length - lastZeroIndex - 1 &&
      middleNums.every((n) => n === 0) &&
      middleNums.length >= 3
    );
  }
}
