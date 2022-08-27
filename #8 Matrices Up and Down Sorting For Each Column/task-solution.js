function upDownColSort(matrix) {
  let oneSortArr = matrix.reduce((a, ar) => a.concat(ar)).sort((a, b) => a - b),
    cols = [],
    sortMatrix = [];
  for (let i = 0, c = 0; i < oneSortArr.length; i += matrix.length, c++)
    cols.push(
      c % 2
        ? oneSortArr.slice(i, i + matrix.length).reverse()
        : oneSortArr.slice(i, i + matrix.length),
    );
  return matrix.map((_, i) => cols.map((c) => c[i]));
}
