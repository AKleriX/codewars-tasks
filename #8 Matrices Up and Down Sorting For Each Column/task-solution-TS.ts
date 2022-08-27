export function upDownColSort(matrix: number[][]): number[][] {
  let oneSortArr: number[] = matrix.reduce((a, ar) => a.concat(ar)).sort((a, b) => a - b),
    cols: number[][] = [],
    sortMatrix: number[][] = [];
  for (let i = 0, c = 0; i < oneSortArr.length; i += matrix.length, c++)
    cols.push(
      c % 2
        ? oneSortArr.slice(i, i + matrix.length).reverse()
        : oneSortArr.slice(i, i + matrix.length),
    );
  return matrix.map((_, i) => cols.map((c) => c[i]));
}
