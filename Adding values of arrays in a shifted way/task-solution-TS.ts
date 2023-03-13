export function addingShifted(arrayOfArrays: number[][], shift: number): number[] {
  let newArr: number[][] = [...arrayOfArrays].map((a, i, arr) => [
    ...Array.from({ length: shift * i }, (_) => 0),
    ...a,
    ...Array.from({ length: shift * (arr.length - i - 1) }, (_) => 0),
  ]);
  return newArr[0].map((n, i) => newArr.reduce((s, a) => s + a[i], 0));
}
