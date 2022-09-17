export function flattenAndSort(array: number[][]): number[] {
  return array.reduce((a, subArr) => a.concat(subArr), []).sort((a, b) => a - b);
}
