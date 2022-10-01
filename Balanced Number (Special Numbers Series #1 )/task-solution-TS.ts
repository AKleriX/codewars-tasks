export function balancedNum(number: number): string {
  let strNum: string = number.toString(),
    leftSum: number = [
      ...strNum.slice(0, strNum.length % 2 ? (strNum.length / 2) | 0 : strNum.length / 2 - 1),
    ].reduce((s, d) => s + +d, 0),
    rightSum: number = [
      ...strNum.slice(strNum.length % 2 ? Math.ceil(strNum.length / 2) : strNum.length / 2 + 1),
    ].reduce((s, d) => s + +d, 0);
  return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}
